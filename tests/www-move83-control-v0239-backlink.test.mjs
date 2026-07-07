import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 83 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move83-control-v0239-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE83_CONTROL_V0239_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE83_CONTROL_V0239_BACKLINK_ID=4c7e0f8ea8b623fd5554c32ca358c0036f9bd82b65c1e95bae61c348fc69c990/);
});
