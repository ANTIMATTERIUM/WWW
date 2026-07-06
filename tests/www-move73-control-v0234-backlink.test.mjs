import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-www-move73-control-v0234-backlink.mjs');

test('WWW Move 73 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE73_CONTROL_V0234_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE73_CONTROL_V0234_BACKLINK_ID=36a06a1af016dced71ed704201490562e438e2af885e083c8026fcd3ebf10548/);
});
