import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.www.move91.control_v0243_backlink.v1');
assert.equal(receipt.move, 91);
assert.equal(receipt.surface, 'WWW');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.version, '0.1.54');

assert.equal(receipt.control.version, '0.2.43');
assert.equal(receipt.control.tag, 'v0.2.43-antimatterium-control-move89-surface-closure');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.43-antimatterium-control-move89-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29045944783');
assert.equal(receipt.control.closure_id, 'f433b1fa1c47217bffbd8561ffa1547ae30629b3ef5ee9c6d94fccdaf679548e');

assert.equal(receipt.backlink.short_public_tag_required, true);
assert.equal(receipt.backlink.no_local_root_required, true);
assert.equal(receipt.backlink.control_member, true);

assert.equal(receipt.safety.no_current_production_claim, true);
assert.equal(receipt.safety.no_starship_claim, true);
assert.equal(receipt.safety.no_physical_production_instructions, true);

const clone = structuredClone(receipt);
delete clone.backlink.id;
const expected = crypto.createHash('sha256').update(JSON.stringify(clone)).digest('hex');
assert.equal(receipt.backlink.id, expected);

console.log('ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK_CONTROL_V0243_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK_CONTROL_V0243_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE91_CONTROL_V0243_BACKLINK_ID=' + receipt.backlink.id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
