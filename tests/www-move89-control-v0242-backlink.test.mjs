import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('WWW Move 89 verifier receipt is stable', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-www-move89-control-v0242-backlink.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_WWW_MOVE89_CONTROL_V0242_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_WWW_MOVE89_CONTROL_V0242_BACKLINK_CONTROL_V0242_RELEASE_BOUND=true/);
});
