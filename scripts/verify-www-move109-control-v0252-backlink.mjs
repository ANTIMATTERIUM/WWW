#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK");
assert.equal(receipt.move, 109);

assert.equal(receipt.surface.name, "WWW");
assert.equal(receipt.surface.package, "@antimatterium/www");
assert.equal(receipt.surface.repo, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surface.version, "0.1.63");
assert.equal(receipt.surface.release_tag, "v0.1.63-antimatterium-www-control-v0252-backlink");

assert.equal(receipt.control.version, "0.2.52");
assert.equal(receipt.control.release_tag, "v0.2.52-antimatterium-control-move107-surface-closure");
assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.52-antimatterium-control-move107-surface-closure");
assert.equal(receipt.control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29154133238");
assert.equal(receipt.control.main_sha, "7068597bd0de25531fffc73c916ca680280c4889");
assert.equal(receipt.control.closure_id, "48d0cd4b1cb1a4c75b3c1f213e6062fa06e530af4aa27cffe013581b20873181");

assert.equal(receipt.membership.control_v0252_bound, true);
assert.equal(receipt.membership.move108_control_surface_closure_bound, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink.id, computed);
assert.equal(backlink.id, "fd6747f44d1fa00e122e042355e4a7b1c8f855bb183e581cbdc2b524899b4663");
assert.equal(backlink.replayable_without_local_root, true);
assert.equal(backlink.public_release_bound, true);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK_CONTROL_V0252_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK_CONTROL_V0252_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE109_CONTROL_V0252_BACKLINK_ID=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
