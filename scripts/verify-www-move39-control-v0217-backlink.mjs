import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../public/receipts/ANTIMATTERIUM_WWW_MOVE39_CONTROL_V0217_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('WWW binds CONTROL v0.2.17 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/www');
  assert.equal(pkg.version, '0.1.28');
  assert.equal(receipt.package_name, '@antimatterium/www');
  assert.equal(receipt.package_version, '0.1.28');
  assert.equal(receipt.control_version, '0.2.17');
  assert.equal(receipt.control_tag, 'v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28520105839');
  assert.equal(receipt.control_closure_id, '7be5acda41a87a01a436239de422e56c6384746bb873ef3d521284ee9c46513e');
  assert.equal(receipt.control_long_closure_slug, 'rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, '55b72bf947c3b8a09eb131f5fa9f6f133c470b93b4409dc1b3775ff3ecaf3cca');
  assert.equal(receipt.WWW_MOVE39_CONTROL_V0217_BACKLINK_ID, '55b72bf947c3b8a09eb131f5fa9f6f133c470b93b4409dc1b3775ff3ecaf3cca');

  console.log('ANTIMATTERIUM_WWW_MOVE39_CONTROL_V0217_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_WWW_CONTROL_V0217_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_WWW_CONTROL_V0217_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('WWW_MOVE39_CONTROL_V0217_BACKLINK_ID=55b72bf947c3b8a09eb131f5fa9f6f133c470b93b4409dc1b3775ff3ecaf3cca');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
