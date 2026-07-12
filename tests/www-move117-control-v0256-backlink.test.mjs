import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const verifierPath = path.resolve(__dirname, "../scripts/verify-www-move117-control-v0256-backlink.mjs");

const result = spawnSync(process.execPath, [verifierPath], { encoding: "utf8" });

assert.equal(result.status, 0, result.stderr || result.stdout);
assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_VERIFY_PASS=true/);
assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_CONTROL_V0256_RELEASE_BOUND=true/);
assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_ID=/);
