import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("WWW binds CONTROL v0.2.10 rootless fanout closure backlink", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink.mjs"], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /VERIFY_PASS=true/);
  assert.match(result.stdout, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
