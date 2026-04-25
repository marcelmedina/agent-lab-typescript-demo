# Design Spec

## Feature: Card Deck Shuffle Mode

### Intent
Add a fast icebreaker mode where each player enters the app, taps once, and gets a random question card.

### Decisions (Iteration 1)
- Added a mode entry point on the start screen with two options:
  - Play Classic Bingo
  - Card Deck Shuffle
- Preserved all existing Bingo behavior and routing through the existing game hook.
- Implemented a dedicated Card Deck Shuffle screen with:
  - Header and back navigation to mode selection
  - A tappable card surface that draws a question
  - A secondary Draw Another Card action button
- Reused the existing `questions` dataset for the deck to keep prompts consistent across modes.
- Prevented immediate repeats when drawing a new question (when more than one question exists).

### Visual Direction
- Kept the existing espresso-bar design system (surface, ink, caramel accent tokens).
- Added a small `cardDealIn` motion to make each draw feel intentional.

### Behavior Notes
- Card Deck Shuffle does not persist selected cards between sessions in this iteration.
- Returning to menu clears current deck question.

### Next Iteration Candidates
- Optional one-hand mobile layout refinements for the draw button position.
- Card stack visual treatment (subtle layered backs) to improve affordance.
- Optional "copy question" quick action.
