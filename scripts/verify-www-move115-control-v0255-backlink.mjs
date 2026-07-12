#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK.json", "utf8"));

assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK");
assert.equal(receipt.move, 115);

assert.equal(receipt.surface.name, "WWW");
assert.equal(receipt.surface.repository, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surface.package, "@antimatterium/www");
assert.equal(receipt.surface.version, "0.1.66");
assert.equal(receipt.surface.release_tag, "v0.1.66-antimatterium-www-control-v0255-backlink");
assert.equal(receipt.surface.release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.66-antimatterium-www-control-v0255-backlink");

assert.equal(receipt.control_source.package, "@antimatterium/control");
assert.equal(receipt.control_source.version, "0.2.55");
assert.equal(receipt.control_source.release_tag, "v0.2.55-antimatterium-control-move113-surface-closure");
assert.equal(receipt.control_source.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.55-antimatterium-control-move113-surface-closure");
assert.equal(receipt.control_source.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29194891663");
assert.equal(receipt.control_source.main_sha, "f579904b1e8ce500661393d25b9016fa7b58bec1");
assert.equal(receipt.control_source.closure_id, "cac92a90fe4ba3a089dda110d5d929814d5fae242961cae18e1ada9cf733e7ab");

assert.equal(receipt.backlink.control_release_bound, true);
assert.equal(receipt.backlink.control_ci_bound, true);
assert.equal(receipt.backlink.control_closure_id_bound, true);
assert.equal(receipt.backlink.member_of_move115_surface_fanout, true);
assert.equal(receipt.backlink.replayable_without_local_root, true);

assert.equal(receipt.constraints.short_public_tag_required, true);
assert.equal(receipt.constraints.no_local_root_required, true);
assert.equal(receipt.constraints.no_current_production_claim, true);
assert.equal(receipt.constraints.no_starship_claim, true);
assert.equal(receipt.constraints.no_physical_production_instructions, true);

const { backlink_id, ...canonical } = receipt;
const computed = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
assert.equal(backlink_id, computed);
assert.equal(backlink_id, "a61e25e38d45861a8de0caadfa6767cfca68cf933068c315beb24034f65d7c1c");

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK_CONTROL_V0255_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK_CONTROL_V0255_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE115_CONTROL_V0255_BACKLINK_ID=" + backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
