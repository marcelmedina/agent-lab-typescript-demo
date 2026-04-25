# AGENTS

## Mandatory Development Checklist
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run test

Complete all three checks before considering any code change done.

## Mission
- Maintain and extend Bingo Mixer (React + TypeScript + Vite).
- Keep changes small, testable, and aligned with workshop flow.

## Quick Commands
- Prerequisite: Node.js 22+ ([README.md](README.md))
- Install: npm install
- Dev server: npm run dev

## Repo Map
- Entry: [src/main.tsx](src/main.tsx)
- App shell: [src/App.tsx](src/App.tsx)
- State/persistence: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Game logic: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Logic tests: [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- Questions: [src/data/questions.ts](src/data/questions.ts)
- UI components: [src/components](src/components)

## Working Conventions
- Keep game rules in utils and UI rendering in components.
- Keep state transitions in hooks.
- Preserve immutable updates and center-square behavior validated by tests.
- For behavior changes, run checklist above before handoff.

## Existing Customizations
- Frontend style guide: [.github/instructions/frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md)
- Tailwind v4 guide: [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md)
- Custom agents: [.github/agents](.github/agents)
- Prompts: [.github/prompts](.github/prompts)

## Docs
- Overview: [README.md](README.md)
- Workshop: [workshop/GUIDE.md](workshop/GUIDE.md)
- Static docs site: [docs/index.html](docs/index.html)

## Pitfalls
- Local state is persisted with a versioned localStorage schema in useBingoGame.
- Use the active Vite local URL for preview checks.
- Link to workshop/docs instead of duplicating instructions.
