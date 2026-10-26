# Bio redesign concepts

Created 25 October 2026. These are design explorations, not an implemented redesign or functioning animation prototype. Existing website source is unchanged.

## Deliverables

- `01-phosphor-archive.png`: cyan terminal/editorial direction, desktop and mobile.
- `02-renaissance-signal.png`: ultramarine Renaissance-inspired art with editorial typography, desktop and mobile.
- `03-field-notes.png`: sage archival/tactical direction, desktop and mobile.
- Figma: https://www.figma.com/design/5ttnRr25VKHpwMWzxKleVG
- Figma includes six simplified editable layout studies, reusable CTA and project-record components, scoped palette variables, and the shared rabbit artwork. These layouts establish typography, content and responsive spacing; they do not reproduce the generated art-heavy compositions exactly. Renaissance scenes are currently concept imagery in the PNGs, not separate production assets or layers in Figma.

The PNGs are AI-generated visual studies. Some small text, dates, contact details, and role labels are invented or inaccurate and must not be treated as biography facts. The editable Figma layouts use content from `src/main.jsx`, omit stale computed durations, and avoid claims about completion or research performance. Concept copy remains proposed copy.

## Page flow

Introduction and emblem → selected work → profile and experience → research and credentials → contact. Keep the existing education, skills, certifications, languages, interests, project links and terminal commands accessible through an expanded archive when implementing. Figma shows a condensed content hierarchy, not every existing entry.

## Proposed motion system

| Interaction | Treatment | Duration |
| --- | --- | --- |
| First entrance | Name and short intro fade in with 12px upward travel; emblem resolves through a pixel mask once | 650–850ms total, no blocking loader |
| Navigation | Smooth anchor movement; active section indicated with a small rule or chapter marker | 450–600ms, interruptible |
| Section entrances | Opacity and 16px upward reveal, once per section, 60ms stagger between related elements | 420–520ms |
| Project hover/focus | Accent rule expands, arrow moves 4px, artwork gains a little contrast | 160–220ms |
| Renaissance artwork | Very shallow scroll parallax, maximum 12–20px; clip within artwork region | Scroll-linked, no text movement |
| Optional terminal | Open command palette with a short fade/translation; Escape closes it; focus returns to trigger | 180–220ms |
| Mobile menu | Short vertical reveal; large touch targets; same section order | 180–220ms |
| Contact | One reveal consistent with the rest of the page | 420ms |

Use a common easing such as cubic-bezier(.22, 1, .36, 1). Avoid scroll hijacking, constant glitches, flashing scanlines, cursor replacement, continuous text scrambling, and mandatory boot sequences. Body text stays clear and still. Reduced-motion mode removes travel, parallax and pixel dissolution; content appears immediately. Animation must not gate navigation or hide content if scripts fail.

## Asset direction

Keep exactly three family stars on the rabbit. Use a simplified version for small navigation marks and favicons. Palette changes to the emblem shown in concepts are exploratory; Figma currently reuses the cyan original across the studies. Use Renaissance-inspired celestial, architectural or botanical artwork as isolated chapter transitions, with text on calm contrasting surfaces. Final historical artwork selections and any attribution should be resolved before production use; the current Renaissance scenes are generated interpretations.

## Validation and limits

Six Figma screens have editable text and semantic auto-layout containers; each has a real rabbit image asset. Checked desktop and mobile composition and repaired mobile project text wrapping and horizontal container height. Structural bounds checks found no overflow on the final six frames. Motion is specified, not implemented or performance-tested. Existing website behavior was not changed.
