import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("WWW Move 61 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE61_CONTROL_V0228_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 61);
  assert.equal(receipt.surface.version, "0.1.39");
  assert.equal(receipt.control.version, "0.2.28");
  assert.equal(receipt.control.closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  assert.equal(receipt.backlink_id, "7cf006f082445cc6ad6d76b0c3d091b156e89c40022423c76bf5863168ff3a44");
});
