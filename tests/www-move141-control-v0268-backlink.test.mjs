import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 141 WWW CONTROL v0.2.68 backlink verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', "verify:move141-control-v0268-backlink"],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE141_CONTROL_V0268_BACKLINK_VERIFY_PASS=true")
  );

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE141_CONTROL_V0268_BACKLINK_ID=")
  );
});
