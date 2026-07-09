import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('WWW Move 91 verifier receipt is stable', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-www-move91-control-v0243-backlink.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK_CONTROL_V0243_RELEASE_BOUND=true/);
});
