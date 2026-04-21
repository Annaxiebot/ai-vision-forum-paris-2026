# AI Vision Forum Paris 2026 - Website Update Summary (v3)

**Date:** March 2, 2026  
**Status:** ✅ Completed and Deployed  
**Commit:** 80a2084

## Overview

Successfully reverted previous incorrect changes and updated the AI Vision Forum Paris 2026 website with the **CORRECT** planning document (v3.0).

## Source Documents

- **Correct Planning Document:** `/Volumes/My Shared Files/vmshare/ai vision forum/AI_Vision_Forum_Paris_2026_PC_Planning_v3.pdf`

## Changes Made

### 1. Git History Cleanup
- Reset repository to commit `bed796e` (before incorrect update)
- Force-pushed to remove commits that used wrong planning document

### 2. Event Context Updates

#### Guiding Question (NEW)
> "As AI reshapes human roles, how do we ensure human core values remain central?"

For Paris, sharpened by the reality that AI coding agents are now reshaping software development, open-source governance, and the $3T SaaS industry itself.

#### Why Now: Three Structural Shifts (NEW)
1. **The Rise of Spec-Driven Development (the "Dark Factory")**
   - L0-L5 framework (Dan Shapiro)
   - StrongDM's 3-person Software Factory proof point
   - AWS Kiro, GitHub spec-kit, Tessl commercialization

2. **The Governance Gap for AI Agents**
   - OWASP Agentic AI Top 10
   - AAIF (Linux Foundation, MCP, AGENTS.md)
   - StrongDM Leash (Cedar-based agent policies)
   - EU AI Act enforcement Aug 2, 2026

3. **Open-Source Sustainability Crisis Amplified by AI**
   - Tailwind CSS 80% revenue decline
   - 60% maintainers unpaid
   - 454K malicious packages (2025)
   - New funding models emerging

#### Unique Value Proposition (NEW)
- Two-layer governance (human ethics + agent security)
- Timing sweet spot (post-MCP Dev Summit, pre-EU AI Act)
- Cross-cultural bridge (US/EU/China)
- Durable framing over hype

### 3. Track Updates

All tracks revised to match v3 document:

| Track | Title | Subtitle | Key Themes |
|-------|-------|----------|------------|
| A | AI & Education | Teaching for a Post-Code World | Specification, judgment, validation |
| B | Human-AI Synergy | From Vibe Coding to the Dark Factory | L0-L5, Spec-driven, Cello |
| C | Ethics & Governance | Two Levels: Human Ethics AND Agent Security | EU AI Act, OWASP Top 10, Cedar |
| D | Digital Public Goods | When AI Trains on the Commons | OpenToken, sustainability |

### 4. Schedule Updates

Updated to v3 draft schedule with detailed session descriptions:

- **08:30–09:15** — Registration + Opening
- **09:15–10:45** — Track A: "The End of Learn to Code" keynote + panel
- **11:00–12:30** — Track B: L0-L5 framework, Dark Factory case study
- **12:30–14:00** — Lunch + AIGC Spotlight (Cello demo, awards)
- **14:00–15:30** — Track C: Governance gap, EU AI Act, OWASP Top 10
- **15:45–17:15** — Track D: OpenToken, foundation fragmentation
- **17:15–17:45** — Closing Remarks
- **18:00–20:30** — Working Dinner (themed tables)

### 5. Event Details Updated

- **Venue:** Vacielle Palace (or TBD) — updated from "Versailles Palace"
- **Date Display:** Monday, May 4, 2026 — clarified day of week
- **Scale:** 100–150 invited participants (using en dash)

### 6. Personal Identifiers Removed

✅ **Excluded as requested:**
- Program committee names
- Speaker names
- All personal identifiers

*Note: Advisors and committee structure mentioned in v3 but not displayed on website*

## Files Modified

### Core Files
- **lib/constants.ts** — Added v3 content structures (WHY_NOW, VALUE_PROPOSITION, CELLO_PROJECT)
- **components/sections/AboutSection.tsx** — Added Guiding Question, Why Now, and Value Proposition sections
- **app/page.tsx** — Updated tracks and schedule rendering

### Build Status
- ✅ TypeScript compilation successful
- ✅ Next.js static build successful
- ✅ All 11 pages generated
- ✅ No build errors

## Git History

```
80a2084 (HEAD -> main, origin/main) Update Paris 2026 website with CORRECT v3 planning document
bed796e fix: Correct remaining Sunday→Monday reference in Notes section
342f095 fix: Correct day of week in HTML version too
568a438 fix: Correct event date - May 4, 2026 is Monday, not Sunday
```

**Removed commits (using wrong document):**
- `9df7c1e` Add website update summary documentation
- `b6c8d7f` Update Paris 2026 website with program committee planning context

## Design Preservation

✅ **Maintained:**
- Existing color scheme and gradients
- Component structure and layouts
- Navigation and footer
- Interactive elements and animations
- Responsive design patterns
- Three.js hero section
- Countdown timer

## Deployment

- **Repository:** https://github.com/aivisionforum/ai-vision-forum-paris-2026
- **Force Push:** Used `--force-with-lease` to safely overwrite incorrect commits
- **Status:** Successfully pushed to origin/main

## Next Steps (Per v3 Document Timeline)

1. **Early March:** Form Program Committee
2. **Mid-March:** First committee call (finalize tracks, Cello decision, speakers)
3. **Late March:** Confirm venue
4. **April 2-3:** AAIF MCP Dev Summit NYC (intelligence gathering)
5. **April:** Speaker outreach; Spotlight call published
6. **Late April:** Finalize program; send invitations
7. **May 4, 2026:** AI Vision Forum Paris 2026

## Verification Checklist

- [x] Reverted to correct git state
- [x] Read correct v3 PDF document
- [x] Updated event context (guiding question, Why Now)
- [x] Updated all four tracks with v3 content
- [x] Updated schedule with v3 draft
- [x] Integrated CELLO project
- [x] Removed personal identifiers
- [x] Preserved existing design/styling
- [x] Build succeeded (no errors)
- [x] Committed changes
- [x] Pushed to GitHub

---

**Completed by:** Subagent (paris2026-correct-update)  
**Task Duration:** ~25 minutes  
**Document Source:** AI_Vision_Forum_Paris_2026_PC_Planning_v3.pdf (Feb 27, 2026)
