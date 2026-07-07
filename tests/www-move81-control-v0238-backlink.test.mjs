import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('WWW Move 81 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-www-move81-control-v0238-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE81_CONTROL_V0238_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE81_CONTROL_V0238_BACKLINK_ID=54babbe9a4164c3a93682287f2ec6cc2dc875c137e1cc0cab052b42a43a518c5/);
});
