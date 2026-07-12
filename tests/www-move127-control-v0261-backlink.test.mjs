import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 127 WWW CONTROL v0.2.61 backlink verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', "verify:move127-control-v0261-backlink"],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE127_CONTROL_V0261_BACKLINK_VERIFY_PASS=true")
  );

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE127_CONTROL_V0261_BACKLINK_ID=")
  );
});
