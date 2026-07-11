#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK");
assert.equal(receipt.move, 105);

assert.equal(receipt.surface.label, "WWW");
assert.equal(receipt.surface.repository, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surface.package, "@antimatterium/www");
assert.equal(receipt.surface.version, "0.1.61");
assert.equal(receipt.surface.release_tag, "v0.1.61-antimatterium-www-control-v0250-backlink");
assert.equal(receipt.surface.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.61-antimatterium-www-control-v0250-backlink");

assert.equal(receipt.source_control.version, "0.2.50");
assert.equal(receipt.source_control.release_tag, "v0.2.50-antimatterium-control-move103-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.50-antimatterium-control-move103-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29151398850");
assert.equal(receipt.source_control.main_sha, "c34479b974a5f064e730f1f02538d52992a3b606");
assert.equal(receipt.source_control.closure_id, "65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186");

assert.equal(receipt.membership.binds_control_v0250, true);
assert.equal(receipt.membership.binds_move104_closure, true);
assert.equal(receipt.membership.closes_from_control_release, receipt.source_control.release);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink.id, computed);
assert.equal(backlink.id, "3f9410579f838edf1cf208064e2bfb4974708ba04a78be16d600450c37f7a284");
assert.equal(backlink.control_release_bound, true);
assert.equal(backlink.control_closure_bound, true);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK_VERIFY_PASS" + "=true");
console.log("ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK_CONTROL_V0250_RELEASE_BOUND" + "=true");
console.log("ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK_CONTROL_V0250_MEMBER" + "=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE105_CONTROL_V0250_BACKLINK_ID" + "=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
