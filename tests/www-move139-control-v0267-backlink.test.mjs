import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 139 WWW CONTROL v0.2.67 backlink verifier exits cleanly', () => {
  const result = spawnSync(
    'npm',
    ['run', "verify:move139-control-v0267-backlink"],
    { encoding: 'utf8' }
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE139_CONTROL_V0267_BACKLINK_VERIFY_PASS=true")
  );

  assert.match(
    result.stdout,
    new RegExp("ANTIMATTERIUM_WWW_MOVE139_CONTROL_V0267_BACKLINK_ID=")
  );
});
