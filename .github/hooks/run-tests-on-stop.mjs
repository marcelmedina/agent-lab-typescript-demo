import { spawnSync } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(npmCommand, ["run", "test", "--", "--run"], {
  stdio: "inherit",
});

if (result.error) {
  console.error(`Hook error: could not execute tests (${result.error.message})`);
  process.exit(2);
}

const exitCode = typeof result.status === "number" ? result.status : 1;
if (exitCode !== 0) {
  console.error("Blocking finish because tests failed.");
  process.exit(2);
}

process.exit(0);
