import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE93_CONTROL_V0244_BACKLINK.json', 'utf8'));
const { backlink, ...base } = receipt;
const expectedBacklinkId = crypto.createHash('sha256').update(JSON.stringify(base)).digest('hex');

assert.equal(receipt.schema, 'antimatterium.www.move93.control_v0244_backlink.v1');
assert.equal(receipt.move, 93);
assert.equal(receipt.relation, 'surface_backlink_from_control_v0244');

assert.equal(receipt.surface.key, 'WWW');
assert.equal(receipt.surface.title, 'WWW');
assert.equal(receipt.surface.repository, 'ANTIMATTERIUM/WWW');
assert.equal(receipt.surface.package_name, '@antimatterium/www');
assert.equal(receipt.surface.version, '0.1.55');
assert.equal(receipt.surface.release_tag, 'v0.1.55-antimatterium-www-control-v0244-backlink');

assert.equal(receipt.control.version, '0.2.44');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.44-antimatterium-control-move91-surface-closure');
assert.equal(receipt.control.tag, 'v0.2.44-antimatterium-control-move91-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29050784336');
assert.equal(receipt.control.closure_id, '12b7a23e6b4691c991c4a4321b299fc963120a35b22c362e466b66121eddab54');
assert.equal(receipt.control.main_sha, '5673ca092d58ec7a5d42f847e47889c77e3432a2');

assert.equal(receipt.public_constraints.short_public_tag_required, true);
assert.equal(receipt.public_constraints.no_local_root_required, true);
assert.equal(receipt.public_constraints.no_current_production_claim, true);
assert.equal(receipt.public_constraints.no_starship_claim, true);
assert.equal(receipt.public_constraints.no_physical_production_instructions, true);

assert.equal(backlink.id, expectedBacklinkId);
assert.equal(backlink.kind, 'control_v0244_surface_backlink');

console.log('ANTIMATTERIUM_WWW_MOVE93_CONTROL_V0244_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_MOVE93_CONTROL_V0244_BACKLINK_CONTROL_V0244_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_MOVE93_CONTROL_V0244_BACKLINK_CONTROL_V0244_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE93_CONTROL_V0244_BACKLINK_ID=' + backlink.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
