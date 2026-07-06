import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 77 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move77-control-v0236-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE77_CONTROL_V0236_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE77_CONTROL_V0236_BACKLINK_ID=2c45e1976d95ac366356ea2d18c7ee6ddcc6d394a1ea8fb3b92f806eb9a3648a/);
});
