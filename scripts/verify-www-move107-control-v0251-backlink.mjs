#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK");
assert.equal(receipt.move, 107);
assert.equal(receipt.surface, "WWW");
assert.equal(receipt.package.name, "@antimatterium/www");
assert.equal(receipt.package.version, "0.1.62");
assert.equal(receipt.package.release_tag, "v0.1.62-antimatterium-www-control-v0251-backlink");

assert.equal(receipt.bound_control.version, "0.2.51");
assert.equal(receipt.bound_control.release_tag, "v0.2.51-antimatterium-control-move105-surface-closure");
assert.equal(receipt.bound_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.51-antimatterium-control-move105-surface-closure");
assert.equal(receipt.bound_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29152869204");
assert.equal(receipt.bound_control.main_sha, "05be850cd6ee4e1f71dc643859b3ec1e531e05af");
assert.equal(receipt.bound_control.closure_id, "88760f9d9c0dc29d456878503895c5c47bbc5c0a42d33d5050b6fbb95bd1bd2b");

assert.equal(receipt.membership.control_v0251_release_bound, true);
assert.equal(receipt.membership.control_v0251_member, true);
assert.equal(receipt.membership.move106_closure_bound, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink.id, computed);
assert.equal(backlink.id, "dd8ebcf9b032f93ecc232725effc99610bd7da38205d9b9a053720525461be27");
assert.equal(backlink.replayable_without_local_root, true);
assert.equal(backlink.public_release_bound, true);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK_CONTROL_V0251_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK_CONTROL_V0251_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE107_CONTROL_V0251_BACKLINK_ID=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
