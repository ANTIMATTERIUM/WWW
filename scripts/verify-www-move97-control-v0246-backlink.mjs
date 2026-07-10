#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK.json", "utf8"));
const { backlink, ...canonical } = receipt;
const expectedBacklinkId = crypto.createHash("sha256").update(JSON.stringify(canonical)).digest("hex");

assert.equal(receipt.schema, "antimatterium.www.move97.control_v0246_backlink.v1");
assert.equal(receipt.move, 97);
assert.equal(receipt.relation, "surface_backlink_to_control_v0246_closure");

assert.equal(receipt.surface.key, "WWW");
assert.equal(receipt.surface.label, "WWW");
assert.equal(receipt.surface.repository, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surface.package_name, "@antimatterium/www");
assert.equal(receipt.surface.version, "0.1.57");
assert.equal(receipt.surface.release_tag, "v0.1.57-antimatterium-www-control-v0246-backlink");

assert.equal(receipt.source_control.version, "0.2.46");
assert.equal(receipt.source_control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.46-antimatterium-control-move95-surface-closure");
assert.equal(receipt.source_control.tag, "v0.2.46-antimatterium-control-move95-surface-closure");
assert.equal(receipt.source_control.ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29121293151");
assert.equal(receipt.source_control.closure_id, "1ddee463650c95cccec7babc8bae95f389c5f75880fc9aeb40a32a7f29b4d33d");
assert.equal(receipt.source_control.main_sha, "138c6d4497a0be4a493452bdd7b4ecf7098f6356");

assert.equal(receipt.public_constraints.short_public_tag_required, true);
assert.equal(receipt.public_constraints.no_local_root_required, true);
assert.equal(receipt.public_constraints.no_current_production_claim, true);
assert.equal(receipt.public_constraints.no_starship_claim, true);
assert.equal(receipt.public_constraints.no_physical_production_instructions, true);

assert.equal(backlink.id, expectedBacklinkId);
assert.equal(backlink.kind, "move97_control_v0246_surface_backlink");
assert.equal(backlink.member, true);

const serialized = JSON.stringify(receipt);
const localUserRootToken = ["/", "Users", "/"].join("");
const localDownloadsAppsToken = ["Downloads", "Apps"].join("/");
assert.equal(serialized.includes(localUserRootToken), false);
assert.equal(serialized.includes(localDownloadsAppsToken), false);

console.log("ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK_CONTROL_V0246_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK_CONTROL_V0246_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE97_CONTROL_V0246_BACKLINK_ID=" + backlink.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
