#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE103_CONTROL_V0249_BACKLINK.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE103_CONTROL_V0249_BACKLINK");
assert.equal(receipt.move, 103);
assert.equal(receipt.surface, "WWW");
assert.equal(receipt.repository, "ANTIMATTERIUM/WWW");

assert.equal(receipt.package.name, "@antimatterium/www");
assert.equal(receipt.package.version, "0.1.60");
assert.equal(receipt.package.release_tag, "v0.1.60-antimatterium-www-control-v0249-backlink");
assert.equal(receipt.package.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.60-antimatterium-www-control-v0249-backlink");

assert.equal(receipt.source_control.version, "0.2.49");
assert.equal(receipt.source_control.release_tag, "v0.2.49-antimatterium-control-move101-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.49-antimatterium-control-move101-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29123896960");
assert.equal(receipt.source_control.closure_id, "fb8753876826c2273ea40e7e28e4a1570b3f06e1085820b83b84921905398073");
assert.equal(receipt.source_control.main_sha, "c475e2c8478fb384c6b350f1a62d063c57ee2b06");

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");

assert.equal(backlink.kind, "move103_control_v0249_surface_backlink");
assert.equal(backlink.binds_control_release, receipt.source_control.release);
assert.equal(backlink.binds_control_closure_id, receipt.source_control.closure_id);
assert.equal(backlink.id, computed);
assert.equal(backlink.id, "be72c5faba9810a7a9d5e6b80551097bf545d6329bfec4da109b5dc0e1b04dd8");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE103_CONTROL_V0249_BACKLINK" + "_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE103_CONTROL_V0249_BACKLINK" + "_CONTROL_V0249_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE103_CONTROL_V0249_BACKLINK" + "_CONTROL_V0249_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE103_CONTROL_V0249_BACKLINK" + "_ID=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
