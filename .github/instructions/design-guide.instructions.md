---
name: design-guide
description: "Use when redesigning or extending the Bingo Mixer UI, styling React screens, or updating src/index.css. Covers the espresso-bar visual system, layout priorities, and behavior-preserving frontend rules."
applyTo: ["src/components/**/*.tsx", "src/App.tsx", "src/index.css"]
---

# Bingo Mixer Design Guide

- Preserve behavior while changing presentation. Do not add or remove game mechanics, alter bingo rules, or change persistence flow when the task is visual.
- Keep the visual direction modern artisan espresso bar: warm parchment surfaces, espresso ink tones, caramel accents, muted sage marked states, and golden bingo celebration states.
- Drive shared styling from `src/index.css` first. Add or refine reusable tokens in `@theme` before introducing one-off component colors.
- Prefer an editorial typography pairing. Use the shared display and body font tokens instead of generic system styling when headings or branded moments need emphasis.
- Build atmosphere with layered backgrounds, surface depth, and restrained motion. Avoid flat default layouts, generic purple gradients, or decorative effects that compete with readability.
- Keep the board as the visual center of the app. Supporting chrome should frame the board, not overpower it.
- Treat bingo squares as compact information cards. Prioritize dense-text legibility, tap targets, hover/active feedback, and clear visual distinction for idle, marked, winning, and free-space states.
- Preserve accessibility and interaction cues on squares and modal flows. Keep existing ARIA semantics, free-space non-interactivity, and obvious state changes.
- Keep responsive behavior deliberate. Mobile layouts should reduce chrome before sacrificing square readability.
- When styling celebration or status layers, make them feel premium and consistent with the cafe theme rather than generic party UI.
- Stay aligned with Tailwind v4 CSS-first patterns. Prefer theme tokens, utility classes, and small inline styles only when they support the established design system.