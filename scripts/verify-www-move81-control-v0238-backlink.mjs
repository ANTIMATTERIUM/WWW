import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE81_CONTROL_V0238_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.public_surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 79);
assert.equal(receipt.surface, 'www');
assert.equal(receipt.surface_title, 'WWW');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.surface_version, '0.1.49');
assert.equal(receipt.surface_tag, 'v0.1.49-antimatterium-www-control-v0238-backlink');

assert.equal(receipt.control.version, '0.2.38');
assert.equal(receipt.control.tag, 'v0.2.38-antimatterium-control-move79-surface-closure');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.38-antimatterium-control-move79-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28893546825');
assert.equal(receipt.control.closure_id, '2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17');

assert.equal(receipt.backlink.type, 'public_surface_to_control_release_backlink');
assert.equal(receipt.backlink.control_key, 'v0238');
assert.equal(receipt.backlink.source_move, 78);
assert.equal(receipt.backlink.fanout_move, 77);

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.backlink_id, '54babbe9a4164c3a93682287f2ec6cc2dc875c137e1cc0cab052b42a43a518c5');

console.log('ANTIMATTERIUM_WWW_MOVE81_CONTROL_V0238_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0238_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0238_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE81_CONTROL_V0238_BACKLINK_ID=54babbe9a4164c3a93682287f2ec6cc2dc875c137e1cc0cab052b42a43a518c5');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
