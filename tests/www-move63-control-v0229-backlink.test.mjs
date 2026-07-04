import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("WWW Move 63 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_WWW_MOVE63_CONTROL_V0229_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "www");
  assert.equal(receipt.surface_version, "0.1.40");
  assert.equal(receipt.control.version, "0.2.29");
  assert.equal(receipt.control.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(receipt.backlink_id, "1f2c9df8075c89c6cfce4f8a807b52e313a6d8711631c934e193464e2291c2ae");
});
