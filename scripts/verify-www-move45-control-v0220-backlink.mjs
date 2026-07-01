import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../public/receipts/ANTIMATTERIUM_WWW_MOVE45_CONTROL_V0220_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('WWW binds CONTROL v0.2.20 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/www');
  assert.equal(pkg.version, '0.1.31');
  assert.equal(receipt.package_name, '@antimatterium/www');
  assert.equal(receipt.package_version, '0.1.31');
  assert.equal(receipt.control_version, '0.2.20');
  assert.equal(receipt.control_tag, 'v0.2.20-antimatterium-control-move43-surface-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.20-antimatterium-control-move43-surface-closure');
  assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525467798');
  assert.equal(receipt.control_closure_id, '0a336efeec3df03622df1814eeb076ba69a3e181006fe52add05c71a05704efc');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, '7417aacc04c2857dbca3719ee2285bb4d865ff34fda61ad1d6e56932758d578c');
  assert.equal(receipt.WWW_MOVE45_CONTROL_V0220_BACKLINK_ID, '7417aacc04c2857dbca3719ee2285bb4d865ff34fda61ad1d6e56932758d578c');

  console.log('ANTIMATTERIUM_WWW_MOVE45_CONTROL_V0220_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_WWW_CONTROL_V0220_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_CONTROL_V0220_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('WWW_MOVE45_CONTROL_V0220_BACKLINK_ID=7417aacc04c2857dbca3719ee2285bb4d865ff34fda61ad1d6e56932758d578c');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
