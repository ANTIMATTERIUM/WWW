import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 93 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move93-control-v0244-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE93_CONTROL_V0244_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true/);
});
