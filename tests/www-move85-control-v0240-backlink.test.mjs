import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 85 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move85-control-v0240-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE85_CONTROL_V0240_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE85_CONTROL_V0240_BACKLINK_ID=25f25e7b040768c90d7abe7be51e7ad2b5d97c45fa2069b53aa8ceb77a8ef464/);
});
