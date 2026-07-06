import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE77_CONTROL_V0236_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.public_surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 77);
assert.equal(receipt.surface, 'www');
assert.equal(receipt.surface_title, 'WWW');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.surface_version, '0.1.47');
assert.equal(receipt.surface_tag, 'v0.1.47-antimatterium-www-control-v0236-backlink');

assert.equal(receipt.control.version, '0.2.36');
assert.equal(receipt.control.tag, 'v0.2.36-antimatterium-control-move75-surface-closure');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.36-antimatterium-control-move75-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28819796095');
assert.equal(receipt.control.closure_id, '990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d');

assert.equal(receipt.backlink.type, 'public_surface_to_control_release_backlink');
assert.equal(receipt.backlink.control_key, 'v0236');
assert.equal(receipt.backlink.source_move, 76);
assert.equal(receipt.backlink.fanout_move, 77);

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.backlink_id, '2c45e1976d95ac366356ea2d18c7ee6ddcc6d394a1ea8fb3b92f806eb9a3648a');

console.log('ANTIMATTERIUM_WWW_MOVE77_CONTROL_V0236_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0236_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0236_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE77_CONTROL_V0236_BACKLINK_ID=2c45e1976d95ac366356ea2d18c7ee6ddcc6d394a1ea8fb3b92f806eb9a3648a');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
