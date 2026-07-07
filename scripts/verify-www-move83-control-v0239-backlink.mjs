import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_WWW_MOVE83_CONTROL_V0239_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 83);
assert.equal(receipt.surface, 'WWW');
assert.equal(receipt.repository, 'ANTIMATTERIUM/WWW');
assert.equal(receipt.package, '@antimatterium/www');
assert.equal(receipt.version, '0.1.50');
assert.equal(receipt.branch, 'antimatterium-www-v0150-control-v0239-backlink');
assert.equal(receipt.tag, 'v0.1.50-antimatterium-www-control-v0239-backlink');
assert.equal(receipt.release, 'https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.50-antimatterium-www-control-v0239-backlink');

assert.equal(receipt.control.version, '0.2.39');
assert.equal(receipt.control.tag, 'v0.2.39-antimatterium-control-move81-surface-closure');
assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.39-antimatterium-control-move81-surface-closure');
assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28896213832');
assert.equal(receipt.control.closure_id, 'cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556');

assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);

assert.equal(receipt.backlink_id, '4c7e0f8ea8b623fd5554c32ca358c0036f9bd82b65c1e95bae61c348fc69c990');

console.log('ANTIMATTERIUM_WWW_MOVE83_CONTROL_V0239_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0239_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_CONTROL_V0239_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE83_CONTROL_V0239_BACKLINK_ID=4c7e0f8ea8b623fd5554c32ca358c0036f9bd82b65c1e95bae61c348fc69c990');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
