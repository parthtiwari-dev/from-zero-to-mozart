#!/usr/bin/env python3
"""
abc-barcheck.py — sanity-check every <NotatedExample> ABC block in the lessons.

abcjs renders a metrically-short or -long bar SILENTLY, so `npm run build` never
catches a bar that doesn't add up. This does. Run it before committing lesson work.

    python tools/abc-barcheck.py                # scan all content/lessons/*.mdx
    python tools/abc-barcheck.py the-modes ...  # scan named slugs only

Two checks, both heuristic (a clean run is not a proof, a dirty run is a real bug):

1. BAR SUMS — for each ABC block with an explicit `M:` (metre) and `L:` (unit
   note length) it sums the duration of every bar and reports any that don't
   equal the metre. Skips `M:none` and metreless blocks (free-time is legit).

2. LABEL COUNTS — `<NotatedExample>` positions one entry of `labels={[...]}`
   under each notehead, in order. A mismatch means noteheads with no label or
   labels that never render (RULES.md #1). A chord `[GBd]` is ONE notehead / one
   label slot; a grace note `{c}` and (outside `rhythmOnly`) a rest get NONE;
   inside `rhythmOnly` a rest DOES get a counting-syllable slot.

Known limits: handles simple tuplets `(3abc` / `(5abcde` (assumes the usual
"fit p notes into the time of q" where q is 2 for (3/(5/(6/(7 and 3 for (2/(4);
does not handle `(p:q:r`, broken rhythm `a>b`, or multi-voice. Anacrusis (pickup)
bars are still reported — eyeball the first/last bar of a tune.
"""
import re, os, sys, glob, fractions

F = fractions.Fraction
ROOT = os.path.join(os.path.dirname(__file__), "..", "content", "lessons")

TOKEN = re.compile(r"\[[^\]]*\]\d*(?:/\d+)?|[\^_=]*[A-Ga-gxzZ][,']*(?:\d+)?(?:/+\d*)?")

def dur(tok, unit):
    m = re.match(r"^(?:\[[^\]]*\]|[\^_=]*[A-Ga-gxzZ][,']*)((?:\d+)?(?:/\d+)?|/+)$", tok)
    if not m:
        return None
    mult = m.group(1)
    if mult == "":
        v = F(1)
    elif mult.startswith("/"):
        v = F(1, 2 ** len(mult)) if set(mult) == {"/"} else F(1, int(mult[1:]))
    elif "/" in mult:
        n, d = mult.split("/")
        v = F(int(n), int(d))
    else:
        v = F(int(mult))
    return v * unit

def check_block(abc):
    mm = re.search(r"^M:\s*(\S+)", abc, re.M)
    if not mm:
        return []
    v = mm.group(1)
    if v in ("none", "C|") and v != "C|":
        return []
    if v == "C":
        metre = F(4, 4)
    elif v == "C|":
        metre = F(2, 2)
    elif "/" in v:
        n, d = v.split("/")
        metre = F(int(n), int(d))
    else:
        return []
    lm = re.search(r"^L:\s*(\d+)/(\d+)", abc, re.M)
    unit = F(int(lm.group(1)), int(lm.group(2))) if lm else F(1, 8)
    km = re.search(r"^K:.*$", abc, re.M)
    body = abc[km.end():] if km else abc
    body = re.sub(r'"[^"]*"', "", body)      # annotation / chord-symbol strings
    body = re.sub(r"![^!]*!", "", body)       # decorations
    body = re.sub(r"\{[^}]*\}", "", body)     # grace notes
    for a, b in (("|]", "|"), ("|:", "|"), (":|", "|"), ("[|", "|"), ("::", "|")):
        body = body.replace(a, b)
    body = re.sub(r"\|\s*\d+", "|", body)     # volta numbers
    out = []
    bars = [b.strip() for b in body.split("|") if b.strip()]
    for i, bar in enumerate(bars):
        total, ok = F(0), True
        tup_left, tup_ratio = 0, F(1)
        pos = 0
        while pos < len(bar):
            tm = re.match(r"\((\d)(?::\d+){0,2}", bar[pos:])
            if tm:
                p = int(tm.group(1))
                q = 3 if p in (2, 4) else 2
                tup_left, tup_ratio = p, F(q, p)
                pos += tm.end()
                continue
            nm = TOKEN.match(bar[pos:])
            if not nm or not nm.group(0):
                pos += 1
                continue
            d = dur(nm.group(0), unit)
            if d is None:
                ok = False
                break
            if tup_left > 0:
                d *= tup_ratio
                tup_left -= 1
            total += d
            pos += nm.end()
        if ok and total not in (metre, F(0)):
            out.append((i + 1, total, metre, bar[:64]))
    return out

def count_noteheads(abc, rhythm_only):
    """How many label slots this ABC block produces (one per rendered notehead)."""
    body = "\n".join(
        ln for ln in abc.splitlines() if not re.match(r"^[A-Za-z]:", ln)
    )
    body = re.sub(r"\[[A-Za-z]:[^\]]*\]", "", body)  # inline fields [K:G] [M:3/4]
    body = re.sub(r'"[^"]*"', "", body)               # chord symbols / annotations
    body = re.sub(r"![^!]*!", "", body)                # decorations
    body = re.sub(r"\{[^}]*\}", "", body)              # grace notes — no slot
    n = 0
    for m in TOKEN.finditer(body):
        tok = m.group(0)
        if not tok:
            continue
        core = re.sub(r"(\d+)?(/+\d*)?$", "", tok)     # drop the duration
        if core.startswith("["):
            n += 1                                     # chord = one notehead
        elif re.match(r"^[\^_=]*[A-Ga-g][,']*$", core):
            n += 1                                     # a pitched note
        elif core in ("z", "Z", "x") and rhythm_only:
            n += 1                                     # rest: slot only in rhythmOnly
    return n


def label_blocks(txt):
    """Yield (abc, rhythm_only, label_count|None) for each <NotatedExample>."""
    for chunk in txt.split("<NotatedExample")[1:]:
        am = re.search(r"abc=\{`([^`]*)`\}", chunk)
        if not am:
            continue
        end = chunk.find("/>")
        scope = chunk[:end] if end != -1 else chunk
        rhythm_only = bool(re.search(r"\brhythmOnly\b", scope))
        lm = re.search(r"labels=\{\[", scope)
        if not lm:
            yield am.group(1), rhythm_only, None
            continue
        i = lm.end() - 1
        depth, arr = 0, scope[i:]
        for j in range(i, len(scope)):
            if scope[j] == "[":
                depth += 1
            elif scope[j] == "]":
                depth -= 1
                if depth == 0:
                    arr = scope[i : j + 1]
                    break
        yield am.group(1), rhythm_only, len(re.findall(r"\{\s*name\s*:", arr))


def main(argv):
    if argv:
        files = [os.path.join(ROOT, s if s.endswith(".mdx") else s + ".mdx") for s in argv]
    else:
        files = sorted(glob.glob(os.path.join(ROOT, "*.mdx")))
    problems = 0
    mismatches = 0
    for fn in files:
        if not os.path.exists(fn):
            print("MISSING", os.path.basename(fn))
            continue
        txt = open(fn, encoding="utf-8").read()
        for m in re.finditer(r"abc=\{`([^`]*)`\}", txt):
            for barno, total, metre, snippet in check_block(m.group(1)):
                problems += 1
                print(f"{os.path.basename(fn)}: bar {barno} = {total} beats (metre {metre})  ::  {snippet}")
        for abc, rhythm_only, nlabels in label_blocks(txt):
            if nlabels is None:
                continue
            nheads = count_noteheads(abc, rhythm_only)
            if nheads != nlabels:
                mismatches += 1
                first = next((l for l in abc.splitlines() if l and not re.match(r"^[A-Za-z]:", l)), "")
                print(f"{os.path.basename(fn)}: {nheads} noteheads vs {nlabels} labels"
                      f"{' (rhythmOnly)' if rhythm_only else ''}  ::  {first[:64]}")
    tally = []
    if problems:
        tally.append(f"{problems} suspicious bar(s)")
    if mismatches:
        tally.append(f"{mismatches} label-count mismatch(es)")
    print("\n" + ("; ".join(tally) + "." if tally else "clean."))
    return 1 if (problems or mismatches) else 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
