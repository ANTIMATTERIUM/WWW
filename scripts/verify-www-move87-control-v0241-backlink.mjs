import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const receipt = JSON.parse(fs.readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE87_CONTROL_V0241_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.www.move87.control_v0241_backlink.v1');
assert.equal(receipt.move, 87);
assert.equal(receipt.surface, 'www');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.version, '0.1.52');

assert.equal(receipt.source_control.version, '0.2.41');
assert.equal(receipt.source_control.tag, 'v0.2.41-antimatterium-control-move85-surface-closure');
assert.equal(receipt.source_control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.41-antimatterium-control-move85-surface-closure');
assert.equal(receipt.source_control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28900560674');
assert.equal(receipt.source_control.closure_id, '448a8074d76baf5d958c6069dbf3d7a9057f86b17aa5d2c74aee76167afc7542');

assert.equal(receipt.backlink.release_member, true);
assert.equal(receipt.backlink.short_public_tag_required, true);
assert.equal(receipt.backlink.no_local_root_required, true);

assert.equal(receipt.safety.no_current_production_claim, true);
assert.equal(receipt.safety.no_starship_claim, true);
assert.equal(receipt.safety.no_physical_production_instructions, true);

const clone = structuredClone(receipt);
delete clone.backlink_id;
const expectedId = crypto.createHash('sha256').update(JSON.stringify(clone)).digest('hex');
assert.equal(receipt.backlink_id, expectedId);

console.log('ANTIMATTERIUM_WWW_MOVE87_CONTROL_V0241_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_MOVE87_CONTROL_V0241_BACKLINK_CONTROL_V0241_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_MOVE87_CONTROL_V0241_BACKLINK_CONTROL_V0241_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE87_CONTROL_V0241_BACKLINK_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
