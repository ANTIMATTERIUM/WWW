import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const receipt = JSON.parse(fs.readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE57_CONTROL_V0226_BACKLINK.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

test("WWW binds CONTROL v0.2.26 public closure", () => {
  assert.equal(pkg.name, "@antimatterium/www");
  assert.equal(pkg.version, "0.1.37");
  assert.equal(pkg.scripts["verify:move57-control-v0226-backlink"], "node scripts/verify-www-move57-control-v0226-backlink.mjs");
  assert.equal(pkg.scripts["test:move57-control-v0226-backlink"], "node --test tests/www-move57-control-v0226-backlink.test.mjs");

  assert.equal(receipt.schema, "antimatterium.public_surface_control_backlink.v1");
  assert.equal(receipt.move, 57);
  assert.equal(receipt.surface_key, "WWW");
  assert.equal(receipt.surface, "WWW");
  assert.equal(receipt.repository, "ANTIMATTERIUM/WWW");
  assert.equal(receipt.package, "@antimatterium/www");
  assert.equal(receipt.surface_version, "0.1.37");
  assert.equal(receipt.surface_tag, "v0.1.37-antimatterium-www-control-v0226-backlink");
  assert.equal(receipt.control_version, "0.2.26");
  assert.equal(receipt.control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.26-antimatterium-control-move55-surface-closure");
  assert.equal(receipt.control_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28704906669");
  assert.equal(receipt.control_closure_id, "8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf");
  assert.match(receipt.backlink_id, /^[a-f0-9]{64}$/);
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);

  console.log("ANTIMATTERIUM_WWW_MOVE57_CONTROL_V0226_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_WWW_CONTROL_V0226_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_WWW_CONTROL_V0226_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_WWW_MOVE57_CONTROL_V0226_BACKLINK_ID=" + receipt.backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
