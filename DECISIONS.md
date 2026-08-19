# DECISIONS.md

## Why this ingestion strategy over the obvious alternative
N/A - Part 2 (Premium Home Page) was chosen over Part 1 (scraper), since a one-day scope favors depth on a single track over spreading thin across both.

## One trade-off made under the time limit
Skipped a CMS or real backend for session content - the "session in progress" card is a static mock rather than a functioning timer/state machine. With a full week, I would wire actual session state (start/pause/complete) using React state or a small store, plus persist session history locally.

## Where AI tools were used, and what was personally verified/changed
Used AI assistance for component scaffolding (Nav, Hero, BreathingCircle, SessionPreview, HowItWorks, CTA, Footer) and the Konami-code easter egg hook. Personally verified: all Tailwind v4 theme tokens render correctly, JSX syntax is valid (caught and fixed a missing opening `<a>` tag and UTF-8 encoding corruption from Notepad saves), responsive behavior at 390px and 1440px, and that no fabricated testimonials/user counts/logos were introduced anywhere in the copy - all copy is honest about the product being a concept, not a live service with real users.


