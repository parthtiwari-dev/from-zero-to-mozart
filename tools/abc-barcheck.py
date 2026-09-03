#!/usr/bin/env python3
"""
abc-barcheck.py — sanity-check every <NotatedExample> ABC block in the lessons.

abcjs renders a metrically-short or -long bar SILENTLY, so `npm run build` never
catches a bar that doesn't add up. This does. Run it before committing lesson work.

    python tools/abc-barcheck.py                # scan all content/lessons/*.mdx
    python tools/abc-barcheck.py the-modes ...  # scan named slugs only

For each ABC block with an explicit `M:` (metre) and `L:` (unit note length) it
sums the duration of every bar and reports any that don't equal the metre. It
skips `M:none` and metreless blocks (free-time examples are legitimate). It is a
heuristic — a clean run is not a proof, but a dirty run is a real bug.

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

def main(argv):
    if argv:
        files = [os.path.join(ROOT, s if s.endswith(".mdx") else s + ".mdx") for s in argv]
    else:
        files = sorted(glob.glob(os.path.join(ROOT, "*.mdx")))
    problems = 0
    for fn in files:
        if not os.path.exists(fn):
            print("MISSING", os.path.basename(fn))
            continue
        txt = open(fn, encoding="utf-8").read()
        for m in re.finditer(r"abc=\{`([^`]*)`\}", txt):
            for barno, total, metre, snippet in check_block(m.group(1)):
                problems += 1
                print(f"{os.path.basename(fn)}: bar {barno} = {total} beats (metre {metre})  ::  {snippet}")
    print(f"\n{problems} suspicious bar(s)." if problems else "\nclean.")
    return 1 if problems else 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
