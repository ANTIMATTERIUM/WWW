import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 131 WWW CONTROL v0.2.63 backlink verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', "verify:move131-control-v0263-backlink"],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE131_CONTROL_V0263_BACKLINK_VERIFY_PASS=true")
  );

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE131_CONTROL_V0263_BACKLINK_ID=")
  );
});
