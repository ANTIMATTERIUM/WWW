import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 123 WWW CONTROL v0.2.59 backlink verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', "verify:move123-control-v0259-backlink"],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE123_CONTROL_V0259_BACKLINK_VERIFY_PASS=true")
  );

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE123_CONTROL_V0259_BACKLINK_ID=")
  );
});
