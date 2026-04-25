---
name: tdd-test-runner
description: Use for post-Green TDD verification in this repo. WHEN trigger keywords appear: tdd test runner, verify checks, run checklist, post-green validation.
argument-hint: Optional context about changed areas or known failures to improve reporting.
user-invocable: true
---

# TDD Test Runner

Runs the mandatory post-Green verification checklist for this repository.

## Mandatory Checklist
- npm run lint
- npm run build
- npm run test

## Procedure
1. Pre-flight
   - Ensure dependencies are installed. If needed, run npm install.
   - Optional: check Node version with node -v and confirm compatibility.
2. Run commands in order and capture outcome
   - Run npm run lint.
   - Run npm run build.
   - Run npm run test.
   - Capture pass/fail and short key output for each command.
3. If one fails
   - Stop immediately on first failure.
   - Report the failing command.
   - Include a short error snippet.
   - Suggest the next action to unblock.
4. If all pass
   - Report that all mandatory checks passed.
   - Include changed files summary if available (for example from git status --short).

## Branching Logic
- Missing script
  - If npm reports a missing script (lint, build, or test), stop and report which script is missing.
  - Suggest adding/fixing the script in package.json or using the repo-approved equivalent command.
- Command not found
  - If node or npm is not found, stop and report environment setup issue.
  - Suggest installing Node.js/npm and rerunning.
- Dependency/tooling not installed
  - If a module or binary is missing, suggest npm install, then rerun from step 2.

## Quality And Completion Criteria
- [ ] Pre-flight completed or blocker clearly reported
- [ ] Commands executed in required order: lint -> build -> test
- [ ] First failure stops execution and includes command + error snippet + next action
- [ ] All-pass summary provided when all checks succeed
- [ ] Changed files included when available
