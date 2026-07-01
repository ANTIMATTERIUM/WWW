import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('WWW CONTROL v0.2.18 backlink verifier exits cleanly', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-www-move41-control-v0218-backlink.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_WWW_MOVE41_CONTROL_V0218_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_WWW_CONTROL_V0218_RELEASE_BOUND=true/);
  assert.match(out, /ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true/);
  assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(out, /NO_STARSHIP_CLAIM=true/);
  assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
