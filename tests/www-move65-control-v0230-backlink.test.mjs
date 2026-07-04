import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("WWW Move 65 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE65_CONTROL_V0230_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "www");
  assert.equal(receipt.surface_version, "0.1.41");
  assert.equal(receipt.control.version, "0.2.30");
  assert.equal(receipt.control.closure_id, "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");
  assert.equal(receipt.backlink_id, "d3ce7a0c0968788b6934672066dea7a957637c1465eaed725a672da7eeb40007");
});
