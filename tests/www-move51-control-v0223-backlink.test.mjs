import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("WWW binds CONTROL v0.2.23 public closure", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE51_CONTROL_V0223_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 51);
  assert.equal(receipt.control_version, "0.2.23");
  assert.equal(receipt.control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.23-antimatterium-control-move49-surface-closure");
  assert.equal(receipt.control_closure_id, "35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e");
  assert.equal(receipt.surface_public_tag, "v0.1.34-antimatterium-www-control-v0223-backlink");
  assert.equal(receipt.backlink_id, "99a1086a802c112208e85432c4de265de299595f2c5104ae86b5335d742cf50b");
});
