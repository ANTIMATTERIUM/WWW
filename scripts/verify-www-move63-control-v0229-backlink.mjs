import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE63_CONTROL_V0229_BACKLINK.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("WWW binds CONTROL v0.2.29 public closure", () => {
  assert.equal(pkg.version, "0.1.40");
  assert.equal(receipt.schema, "antimatterium.surface_control_backlink_receipt.v1");
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "www");
  assert.equal(receipt.surface_name, "WWW");
  assert.equal(receipt.surface_version, "0.1.40");
  assert.equal(receipt.surface_public_tag, "v0.1.40-antimatterium-www-control-v0229-backlink");
  assert.equal(receipt.control.version, "0.2.29");
  assert.equal(receipt.control.public_tag, "v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706590644");
  assert.equal(receipt.control.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { backlink_id, ...payload } = receipt;
  assert.equal(backlink_id, "1f2c9df8075c89c6cfce4f8a807b52e313a6d8711631c934e193464e2291c2ae");
  assert.equal(canonicalHash(payload), "1f2c9df8075c89c6cfce4f8a807b52e313a6d8711631c934e193464e2291c2ae");
  console.log("ANTIMATTERIUM_WWW_MOVE63_CONTROL_V0229_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_WWW_CONTROL_V0229_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_CONTROL_V0229_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_WWW_MOVE63_CONTROL_V0229_BACKLINK_ID=" + backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
