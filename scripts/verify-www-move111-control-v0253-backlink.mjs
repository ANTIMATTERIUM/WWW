#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK.json", "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK");
assert.equal(receipt.move, 111);

assert.equal(receipt.surface.name, "WWW");
assert.equal(receipt.surface.key, "www");
assert.equal(receipt.surface.repository, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surface.package, "@antimatterium/www");
assert.equal(receipt.surface.version, "0.1.64");
assert.equal(receipt.surface.release_tag, "v0.1.64-antimatterium-www-control-v0253-backlink");

assert.equal(receipt.control.version, "0.2.53");
assert.equal(receipt.control.release_tag, "v0.2.53-antimatterium-control-move109-surface-closure");
assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.53-antimatterium-control-move109-surface-closure");
assert.equal(receipt.control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29155447375");
assert.equal(receipt.control.main_sha, "fcaa2d7c60d5debe679adf899ed769a044dcfbc5");
assert.equal(receipt.control.closure_id, "2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7");

assert.equal(receipt.backlink.control_v0253_bound, true);
assert.equal(receipt.backlink.move110_closure_bound, true);
assert.equal(receipt.backlink.public_release_bound, true);
assert.equal(receipt.backlink.replayable_without_local_root, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink_id, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink_id, computed);
assert.equal(backlink_id, "cf66a45147f746681d692c5763cb5e8b39bb9c9b980a1e177e4f9dac193e7c70");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK_CONTROL_V0253_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK_CONTROL_V0253_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE111_CONTROL_V0253_BACKLINK_ID=" + backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
