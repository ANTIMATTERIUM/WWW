#!/usr/bin/env node
import fs from 'node:fs';
import crypto from 'node:crypto';

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE119_CONTROL_V0257_BACKLINK.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));

const stable = {
  "doctrine": "ANTIMATTERIUM_PUBLIC_SURFACE_CONTROL_BACKLINK",
  "move": 119,
  "surface": "WWW",
  "surface_label": "WWW",
  "surface_repo": "ANTIMATTERIUM/WWW",
  "surface_version": "0.1.68",
  "surface_tag": "v0.1.68-antimatterium-www-control-v0257-backlink",
  "control_version": "0.2.57",
  "control_tag": "v0.2.57-antimatterium-control-move117-surface-closure",
  "control_release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.57-antimatterium-control-move117-surface-closure",
  "control_ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29197125059",
  "control_main_sha": "ad002077cc6d86bd03655ee8bec24df00f75d17d",
  "control_closure_id": "b9e403645fe18031552c192cd7ebed2c2d8e9aec070502c6d89b556aabfabf32",
  "short_public_tag_required": true,
  "no_local_root_required": true,
  "no_current_production_claim": true,
  "no_starship_claim": true,
  "no_physical_production_instructions": true
};
const expectedId = crypto.createHash('sha256')
  .update(JSON.stringify(stable))
  .digest('hex');

function assert(condition, message) {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

assert(receipt.move === 119, 'MOVE119_RECEIPT_MOVE_MISMATCH');
assert(receipt.surface === "WWW", 'MOVE119_RECEIPT_SURFACE_MISMATCH');
assert(receipt.surface_version === "0.1.68", 'MOVE119_RECEIPT_VERSION_MISMATCH');
assert(receipt.surface_tag === "v0.1.68-antimatterium-www-control-v0257-backlink", 'MOVE119_RECEIPT_TAG_MISMATCH');
assert(receipt.control_version === "0.2.57", 'MOVE119_CONTROL_VERSION_MISMATCH');
assert(receipt.control_tag === "v0.2.57-antimatterium-control-move117-surface-closure", 'MOVE119_CONTROL_TAG_MISMATCH');
assert(receipt.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.57-antimatterium-control-move117-surface-closure", 'MOVE119_CONTROL_RELEASE_MISMATCH');
assert(receipt.control_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29197125059", 'MOVE119_CONTROL_CI_RUN_MISMATCH');
assert(receipt.control_main_sha === "ad002077cc6d86bd03655ee8bec24df00f75d17d", 'MOVE119_CONTROL_SHA_MISMATCH');
assert(receipt.control_closure_id === "b9e403645fe18031552c192cd7ebed2c2d8e9aec070502c6d89b556aabfabf32", 'MOVE119_CONTROL_CLOSURE_ID_MISMATCH');
assert(receipt.backlink_id === expectedId, 'MOVE119_BACKLINK_ID_MISMATCH');
assert(receipt.short_public_tag_required === true, 'MOVE119_SHORT_PUBLIC_TAG_REQUIRED_MISSING');
assert(receipt.no_local_root_required === true, 'MOVE119_NO_LOCAL_ROOT_REQUIRED_MISSING');
assert(receipt.no_current_production_claim === true, 'MOVE119_NO_CURRENT_PRODUCTION_CLAIM_MISSING');
assert(receipt.no_starship_claim === true, 'MOVE119_NO_STARSHIP_CLAIM_MISSING');
assert(receipt.no_physical_production_instructions === true, 'MOVE119_NO_PHYSICAL_PRODUCTION_INSTRUCTIONS_MISSING');

console.log('ANTIMATTERIUM_WWW_MOVE119_CONTROL_V0257_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_MOVE119_CONTROL_V0257_BACKLINK_CONTROL_V0257_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_MOVE119_CONTROL_V0257_BACKLINK_CONTROL_V0257_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE119_CONTROL_V0257_BACKLINK_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
