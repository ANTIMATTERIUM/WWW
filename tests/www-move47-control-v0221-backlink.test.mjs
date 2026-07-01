import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('WWW binds CONTROL v0.2.21 public closure', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-www-move47-control-v0221-backlink.mjs'], { encoding: 'utf8' });
  assert.match(out, /MOVE47_CONTROL_V0221_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true/);
  assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
  assert.match(out, /NO_STARSHIP_CLAIM=true/);
  assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
