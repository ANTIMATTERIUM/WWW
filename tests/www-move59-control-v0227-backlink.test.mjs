import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("WWW Move 59 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE59_CONTROL_V0227_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 59);
  assert.equal(receipt.surface, "www");
  assert.equal(receipt.surface_version, "0.1.38");
  assert.equal(receipt.control.version, "0.2.27");
  assert.equal(receipt.control.closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  assert.equal(receipt.backlink_id, "3474233f57f492980f136b5e5d9df0946499cc64e09a06aa59c2283f3d7f816d");
});
