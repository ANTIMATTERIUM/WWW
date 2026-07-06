import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 75 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move75-control-v0235-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE75_CONTROL_V0235_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE75_CONTROL_V0235_BACKLINK_ID=990a25dc7da43d5ec3235d11c621f53e6e81a12d591c03fc3351f311e4598cd5/);
});
