import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE67_CONTROL_V0231_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 67);
assert.equal(receipt.surface_key, 'WWW');
assert.equal(receipt.surface_display, 'WWW');
assert.equal(receipt.surface_version, '0.1.42');
assert.equal(receipt.surface_tag, 'v0.1.42-antimatterium-www-control-v0231-backlink');
assert.equal(receipt.surface_release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.42-antimatterium-www-control-v0231-backlink');
assert.equal(receipt.control_version, '0.2.31');
assert.equal(receipt.control_tag, 'v0.2.31-antimatterium-control-move65-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.31-antimatterium-control-move65-surface-closure');
assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28746575495');
assert.equal(receipt.control_closure_id, 'ed2ac2e0ae68635986a07084622f3ae9a2fc746995b1aaf11846913bad8d9c8d');
assert.equal(receipt.binding.type, 'public_surface_backlink');
assert.equal(receipt.binding.source_move, 66);
assert.equal(receipt.binding.target_move, 67);
assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.backlink_id, '0c429e30935cfead1be7aee0b2c3b049b2ee8d747d2588de68ea8e4bfa4f9ffd');

console.log('ANTIMATTERIUM_WWW_MOVE67_CONTROL_V0231_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0231_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE67_CONTROL_V0231_BACKLINK_ID=0c429e30935cfead1be7aee0b2c3b049b2ee8d747d2588de68ea8e4bfa4f9ffd');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
