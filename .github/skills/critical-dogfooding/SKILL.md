---
name: critical-dogfooding
description: 'Critically dogfood a web app like a real user, exercising the live product flow and judging fun, friction, clarity, and product payoff. Use for dogfooding, UX testing, product critique, gameplay critique, live browser testing, and honest feedback about whether an app is enjoyable or flat.'
argument-hint: 'Describe what to dogfood and any focus area, such as onboarding, fun, retention, or mobile.'
user-invocable: true
---

# Critical Dogfooding

Use this skill when the goal is not just to check whether an app works, but to test whether it feels worth using.

## When to Use
- Dogfooding a live web app in the browser
- Giving product feedback from a first-time user perspective
- Assessing whether an experience is fun, sticky, satisfying, or flat
- Evaluating onboarding, feedback loops, reward moments, and replay value
- Stress-testing a demo to see whether it feels like a product

## What This Produces
- A short account of the tested flow
- Critical findings focused on product value, not just implementation quality
- A judgment about whether the experience is enjoyable
- Concrete suggestions that would most improve the experience

## Procedure
1. Start from the live product surface.
   - Prefer the running app over code inspection.
   - If a dev server or preview task exists, use it.
   - Capture the actual URL before interacting.

2. Exercise the first-run path.
   - Go through the landing or onboarding flow exactly once without assuming intent.
   - Identify what the app promises in its first screen.
   - Judge whether the first action is obvious and whether the payoff is immediate.

3. Test the core loop like a skeptical user.
   - Perform the smallest sequence needed to reach the app's main reward moment.
   - For a game or playful app, ask whether each action feels earned, expressive, and satisfying.
   - For a productivity app, ask whether each action feels useful, fast, and confidence-building.

4. Probe the edges that change product feel.
   - Check what happens after success, after backing out, after restarting, and after reload.
   - Inspect mobile or narrow viewport behavior if the app is responsive.
   - Look for friction that makes the app feel like a demo instead of a finished experience.

5. Evaluate the emotional arc.
   - What creates anticipation?
   - What creates delight or payoff?
   - What feels repetitive, empty, or purely mechanical?
   - Would a real user want another round, another session, or to share it?

6. Separate functional quality from product fun.
   - Note when the app is technically sound but emotionally weak.
   - Do not let clean implementation hide a flat experience.
   - Call out when the UX removes tension, choice, social payoff, or replay value.

7. Report findings in descending order of product impact.
   - Lead with the biggest reasons the experience does or does not work.
   - Be direct about whether it is fun, sticky, memorable, or disposable.
   - Offer a few high-leverage changes rather than a long backlog of nits.

## Decision Rules
- If the live app is unavailable, say that the dogfooding pass is blocked and fall back to code review only if the user wants that substitute.
- If the app works but feels flat, say so plainly instead of padding the review with implementation compliments.
- If the app has one good moment but weak continuation, treat retention and replay value as product issues.
- If the experience depends on social input, judge both the interface and the quality of prompts or content.

## Quality Bar
- Uses the real UI, not just source reading
- Covers first-run flow, core loop, and at least one edge path
- Distinguishes functional correctness from actual enjoyment
- Gives an explicit judgment about fun or payoff
- Prioritizes the most important product weaknesses
- Ends with concrete changes that could materially improve the experience

## Output Pattern
Use a concise structure like this:

1. What was tested
2. Overall judgment
3. Critical findings
4. What is working
5. Highest-leverage improvements

## Example Prompts
- `/critical-dogfooding Dogfood this app like a skeptical first-time user.`
- `/critical-dogfooding Test whether this game is actually fun on mobile.`
- `/critical-dogfooding Use the running app and tell me if this feels like a demo or a product.`