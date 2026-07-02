import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

const receipt = JSON.parse(fs.readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE49_CONTROL_V0222_BACKLINK.json", import.meta.url), "utf8"));

test("WWW binds CONTROL v0.2.22 public closure", () => {
  assert.equal(receipt.schema, "antimatterium.www.move49.control_v0222_backlink.v1");
  assert.equal(receipt.move, 49);
  assert.equal(receipt.repo_kind, "www");
  assert.equal(receipt.package_name, "@antimatterium/www");
  assert.equal(receipt.package_version, "0.1.33");
  assert.equal(pkg.version, "0.1.33");
  assert.equal(receipt.public_tag, "v0.1.33-antimatterium-www-control-v0222-backlink");
  assert.equal(receipt.public_release, "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.33-antimatterium-www-control-v0222-backlink");
  assert.equal(receipt.control_release_bound, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.22-antimatterium-control-move47-surface-closure");
  assert.equal(receipt.control_ci_run_bound, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28534121995");
  assert.equal(receipt.control_closure_id_bound, "89b2f9e3f39ae4e63f9a1c648e95b310ad5145c2cae94778ca3227fcbe1c2c49");
  assert.equal(receipt.control_package_version_bound, "0.2.22");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  assert.match(receipt.backlink_id, /^[a-f0-9]{64}$/);

  console.log("ANTIMATTERIUM_WWW_MOVE49_CONTROL_V0222_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_WWW_CONTROL_V0222_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_CONTROL_V0222_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_WWW_MOVE49_CONTROL_V0222_BACKLINK_ID=" + receipt.backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
