import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('Move 119 WWW CONTROL v0.2.57 backlink verifier exits cleanly', () => {
  const out = execFileSync('node', ["scripts/verify-www-move119-control-v0257-backlink.mjs"], { encoding: 'utf8' });
  assert.match(out, /MOVE119_CONTROL_V0257_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true/);
  assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(out, /NO_STARSHIP_CLAIM=true/);
  assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
