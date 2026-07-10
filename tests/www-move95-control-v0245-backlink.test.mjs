import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 95 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move95-control-v0245-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK_ID=366e451002d513247e641b6a90b4fc6d3b987f296f756a740565a7801723905a/);
});
