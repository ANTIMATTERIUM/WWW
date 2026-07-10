#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK.json";
const expected = {
  "protocol": "ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK",
  "move": 101,
  "surface": {
    "name": "WWW",
    "repository": "ANTIMATTERIUM/WWW",
    "package": "@antimatterium/www",
    "version": "0.1.59",
    "receipt_path": "public/receipts/ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK.json",
    "verifier": "scripts/verify-www-move101-control-v0248-backlink.mjs",
    "test": "tests/www-move101-control-v0248-backlink.test.mjs"
  },
  "source_control": {
    "package": "@antimatterium/control",
    "version": "0.2.48",
    "release": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.48-antimatterium-control-move99-surface-closure",
    "release_tag": "v0.2.48-antimatterium-control-move99-surface-closure",
    "ci_run": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29122920642",
    "closure_id": "5b65cc86664000ddedcd539e13ad893e6c88e8912f5785a0163c408bb1624132",
    "main_sha": "ee9f30cd0b9378a8bf34d0e0ac285c282e310901",
    "closure_kind": "move100_control_public_surface_backlink_fanout_closure"
  },
  "constraints": {
    "short_public_tag_required": true,
    "no_local_root_required": true,
    "no_current_production_claim": true,
    "no_starship_claim": true,
    "no_physical_production_instructions": true
  },
  "backlinkId": "82ed229a283be8cf9d54e32dbf7f43a82cf3bdd8e0ba8d1b426c992231c83bae"
};
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, expected.protocol);
assert.equal(receipt.move, expected.move);
assert.deepEqual(receipt.surface, expected.surface);
assert.deepEqual(receipt.source_control, expected.source_control);
assert.deepEqual(receipt.constraints, expected.constraints);
assert.equal(receipt.backlink.kind, "move101_surface_control_v0248_backlink");
assert.equal(receipt.backlink.binds_control_release, expected.source_control.release);
assert.equal(receipt.backlink.binds_control_closure_id, expected.source_control.closure_id);

const { backlink, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink.id, computed);
assert.equal(backlink.id, expected.backlinkId);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK_CONTROL_V0248_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK_CONTROL_V0248_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE101_CONTROL_V0248_BACKLINK_ID=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
