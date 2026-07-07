import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE85_CONTROL_V0240_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 85);
assert.equal(receipt.surface, 'WWW');
assert.equal(receipt.repository, 'ANTIMATTERIUM/WWW');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.version, '0.1.51');
assert.equal(receipt.branch, 'antimatterium-www-v0151-control-v0240-backlink');
assert.equal(receipt.tag, 'v0.1.51-antimatterium-www-control-v0240-backlink');
assert.equal(receipt.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.51-antimatterium-www-control-v0240-backlink');

assert.equal(receipt.control.version, '0.2.40');
assert.equal(receipt.control.tag, 'v0.2.40-antimatterium-control-move83-surface-closure');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.40-antimatterium-control-move83-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28898964616');
assert.equal(receipt.control.closure_id, '1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.backlink_id, '25f25e7b040768c90d7abe7be51e7ad2b5d97c45fa2069b53aa8ceb77a8ef464');

console.log('ANTIMATTERIUM_WWW_MOVE85_CONTROL_V0240_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0240_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0240_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE85_CONTROL_V0240_BACKLINK_ID=25f25e7b040768c90d7abe7be51e7ad2b5d97c45fa2069b53aa8ceb77a8ef464');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
