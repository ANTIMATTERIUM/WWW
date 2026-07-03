import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("WWW binds CONTROL v0.2.24 public closure", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE53_CONTROL_V0224_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 53);
  assert.equal(receipt.control_version, "0.2.24");
  assert.equal(receipt.control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.24-antimatterium-control-move51-surface-closure");
  assert.equal(receipt.control_closure_id, "fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872");
  assert.equal(receipt.surface_public_tag, "v0.1.35-antimatterium-www-control-v0224-backlink");
  assert.equal(receipt.backlink_id, "aa66fcbfc52271292c9f0c42759bc545add393d47ffbfa9147f8f0c4ab911774");
});
