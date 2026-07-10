#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK.json";
const expected = {
  "protocol": "ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK",
  "move": 99,
  "surface": {
    "label": "WWW",
    "package": "@antimatterium/www",
    "version": "0.1.58",
    "release_tag": "v0.1.58-antimatterium-www-control-v0247-backlink",
    "receipt_path": "public/receipts/ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK.json",
    "verifier": "scripts/verify-www-move99-control-v0247-backlink.mjs",
    "test": "tests/www-move99-control-v0247-backlink.test.mjs"
  },
  "control": {
    "package": "@antimatterium/control",
    "version": "0.2.47",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.47-antimatterium-control-move97-surface-closure",
    "release_tag": "v0.2.47-antimatterium-control-move97-surface-closure",
    "ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29121927208",
    "closure_id": "d0d96d476693d7cc05e1a2c6f4467afaeae1711d5dd426944f78cd0e60789874",
    "main_sha": "c50f5844d8e4bfc54c63481e7ec46ad586788c4b"
  },
  "constraints": {
    "short_public_tag_required": true,
    "no_local_root_required": true,
    "no_current_production_claim": true,
    "no_starship_claim": true,
    "no_physical_production_instructions": true
  },
  "backlinkKind": "move99_www_control_v0247_backlink",
  "backlinkId": "6be0be82cdfecec6a319604688180db339e64fcb1ea873f030e1efca0db0194f"
};
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, expected.protocol);
assert.equal(receipt.move, expected.move);
assert.deepEqual(receipt.surface, expected.surface);
assert.deepEqual(receipt.control, expected.control);
assert.deepEqual(receipt.constraints, expected.constraints);
assert.equal(receipt.backlink.kind, expected.backlinkKind);
assert.equal(receipt.backlink.release_tag, expected.surface.release_tag);

const { backlink, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink.id, computed);
assert.equal(backlink.id, expected.backlinkId);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK_CONTROL_V0247_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK_CONTROL_V0247_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE99_CONTROL_V0247_BACKLINK_ID=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
