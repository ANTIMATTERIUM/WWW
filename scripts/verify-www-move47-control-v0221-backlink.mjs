import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../public/receipts/ANTIMATTERIUM_WWW_MOVE47_CONTROL_V0221_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('WWW binds CONTROL v0.2.21 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/www');
  assert.equal(pkg.version, '0.1.32');
  assert.equal(receipt.package_name, '@antimatterium/www');
  assert.equal(receipt.package_version, '0.1.32');
  assert.equal(receipt.public_tag, 'v0.1.32-antimatterium-www-control-v0221-backlink');
  assert.equal(receipt.control.version, '0.2.21');
  assert.equal(receipt.control.tag, 'v0.2.21-antimatterium-control-move45-surface-closure');
  assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.21-antimatterium-control-move45-surface-closure');
  assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28527938011');
  assert.equal(receipt.control.closure_id, '84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, 'eebb0a4ef643a7c9e5c12de6514898ec1bfd56f4ba9cef8ad82e1a892b1f4e0d');
  assert.equal(receipt.WWW_MOVE47_CONTROL_V0221_BACKLINK_ID, 'eebb0a4ef643a7c9e5c12de6514898ec1bfd56f4ba9cef8ad82e1a892b1f4e0d');

  console.log('ANTIMATTERIUM_WWW_MOVE47_CONTROL_V0221_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_WWW_CONTROL_V0221_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_CONTROL_V0221_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('WWW_MOVE47_CONTROL_V0221_BACKLINK_ID=eebb0a4ef643a7c9e5c12de6514898ec1bfd56f4ba9cef8ad82e1a892b1f4e0d');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
