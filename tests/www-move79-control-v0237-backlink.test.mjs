import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 79 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move79-control-v0237-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE79_CONTROL_V0237_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE79_CONTROL_V0237_BACKLINK_ID=834907d3ec61ec57ce1b4f21063bfeb285fcaff3c62ffc32508d9761e553e0c2/);
});
