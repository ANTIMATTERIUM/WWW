import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Move 121 WWW CONTROL v0.2.58 backlink verifier exits cleanly', () => {
  const result = spawnSync('npm', ['run', "verify:move121-control-v0258-backlink"], {
    encoding: 'utf8'
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /MOVE121_CONTROL_V0258_BACKLINK_VERIFY_PASS=true/);
});
