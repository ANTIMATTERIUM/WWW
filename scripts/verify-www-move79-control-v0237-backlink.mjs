import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE79_CONTROL_V0237_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.public_surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 79);
assert.equal(receipt.surface, 'www');
assert.equal(receipt.surface_title, 'WWW');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.surface_version, '0.1.48');
assert.equal(receipt.surface_tag, 'v0.1.48-antimatterium-www-control-v0237-backlink');

assert.equal(receipt.control.version, '0.2.37');
assert.equal(receipt.control.tag, 'v0.2.37-antimatterium-control-move77-surface-closure');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.37-antimatterium-control-move77-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28821621138');
assert.equal(receipt.control.closure_id, '4304bc3fc22364c5600526b2f87bad02d6bb52c56d56755be2b1cbfefdfdd377');

assert.equal(receipt.backlink.type, 'public_surface_to_control_release_backlink');
assert.equal(receipt.backlink.control_key, 'v0237');
assert.equal(receipt.backlink.source_move, 78);
assert.equal(receipt.backlink.fanout_move, 77);

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.backlink_id, '834907d3ec61ec57ce1b4f21063bfeb285fcaff3c62ffc32508d9761e553e0c2');

console.log('ANTIMATTERIUM_WWW_MOVE79_CONTROL_V0237_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0237_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0237_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE79_CONTROL_V0237_BACKLINK_ID=834907d3ec61ec57ce1b4f21063bfeb285fcaff3c62ffc32508d9761e553e0c2');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
