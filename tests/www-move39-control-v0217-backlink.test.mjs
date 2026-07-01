import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('WWW CONTROL v0.2.17 backlink verifier exits cleanly', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-www-move39-control-v0217-backlink.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_WWW_MOVE39_CONTROL_V0217_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_WWW_CONTROL_V0217_RELEASE_BOUND=true/);
  assert.match(out, /ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true/);
  assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(out, /NO_STARSHIP_CLAIM=true/);
  assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
