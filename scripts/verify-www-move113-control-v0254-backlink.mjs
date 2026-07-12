#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE113_CONTROL_V0254_BACKLINK.json", "utf8"));

assert.equal(receipt.protocol, "WWW_MOVE113_CONTROL_V0254_BACKLINK");
assert.equal(receipt.move, 113);

assert.equal(receipt.surface.key, "www");
assert.equal(receipt.surface.label, "WWW");
assert.equal(receipt.surface.repository, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surface.package, "@antimatterium/www");
assert.equal(receipt.surface.version, "0.1.65");
assert.equal(receipt.surface.release_tag, "v0.1.65-antimatterium-www-control-v0254-backlink");
assert.equal(receipt.surface.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.65-antimatterium-www-control-v0254-backlink");

assert.equal(receipt.source_control.package, "@antimatterium/control");
assert.equal(receipt.source_control.version, "0.2.54");
assert.equal(receipt.source_control.release_tag, "v0.2.54-antimatterium-control-move111-surface-closure");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.54-antimatterium-control-move111-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29191821036");
assert.equal(receipt.source_control.main_sha, "cba5f798ac6a803803e86ca39ad54376c338d381");
assert.equal(receipt.source_control.closure_id, "ebfc24685134a4fb66c15bf9ec149a0d1a4ec8c98871f9684c0cb73447e751a6");

assert.equal(receipt.backlink.control_v0254_bound, true);
assert.equal(receipt.backlink.move112_closure_bound, true);
assert.equal(receipt.backlink.move113_surface_fanout_member, true);
assert.equal(receipt.backlink.replayable_without_local_root, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink_id, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink_id, computed);
assert.equal(backlink_id, "820dd8dc5685b4624f390bd80e085a27bf8d656033ee8a0fcd0c553bbeecc5cf");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("WWW_MOVE113_CONTROL_V0254_BACKLINK_VERIFY_PASS=true");
console.log("WWW_MOVE113_CONTROL_V0254_BACKLINK_CONTROL_V0254_RELEASE_BOUND=true");
console.log("WWW_MOVE113_CONTROL_V0254_BACKLINK_CONTROL_V0254_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("WWW_MOVE113_CONTROL_V0254_BACKLINK_ID=" + backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
