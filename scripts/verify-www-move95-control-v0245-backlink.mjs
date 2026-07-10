import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK.json', 'utf8'));
const { backlink, ...base } = receipt;
const expectedBacklinkId = crypto.createHash('sha256').update(JSON.stringify(base)).digest('hex');

assert.equal(receipt.schema, 'antimatterium.www.move95.control_v0245_backlink.v1');
assert.equal(receipt.move, 95);
assert.equal(receipt.relation, 'surface_backlink_to_control_v0245_closure');

assert.equal(receipt.surface.key, 'WWW');
assert.equal(receipt.surface.label, 'WWW');
assert.equal(receipt.surface.repository, 'ANTIMATTERIUM/WWW');
assert.equal(receipt.surface.package_name, '@antimatterium/www');
assert.equal(receipt.surface.version, '0.1.56');
assert.equal(receipt.surface.release_tag, 'v0.1.56-antimatterium-www-control-v0245-backlink');

assert.equal(receipt.source_control.version, '0.2.45');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.45-antimatterium-control-move93-surface-closure');
assert.equal(receipt.source_control.tag, 'v0.2.45-antimatterium-control-move93-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29114333184');
assert.equal(receipt.source_control.closure_id, 'a233a9b9a989b021c008843e9a9947af74a27127debb13cd6539cc284cc23b03');
assert.equal(receipt.source_control.main_sha, 'e4a2d18ed58554dbbaacdca836e07a60ca8b49ad');

assert.equal(receipt.public_constraints.short_public_tag_required, true);
assert.equal(receipt.public_constraints.no_local_root_required, true);
assert.equal(receipt.public_constraints.no_current_production_claim, true);
assert.equal(receipt.public_constraints.no_starship_claim, true);
assert.equal(receipt.public_constraints.no_physical_production_instructions, true);

assert.equal(backlink.id, expectedBacklinkId);
assert.equal(backlink.kind, 'move95_control_v0245_surface_backlink');
assert.equal(backlink.member, true);

console.log('ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK_CONTROL_V0245_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK_CONTROL_V0245_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE95_CONTROL_V0245_BACKLINK_ID=' + backlink.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
