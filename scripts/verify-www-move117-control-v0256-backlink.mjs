#!/usr/bin/env node
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const receiptPath = path.resolve(__dirname, "../public/receipts/ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK.json");
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));

function sorted(value) {
  if (Array.isArray(value)) return value.map(sorted);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sorted(value[key])]));
  }
  return value;
}

function idFor(value) {
  return crypto.createHash("sha256").update(JSON.stringify(sorted(value))).digest("hex");
}

const { backlinkId, ...baseReceipt } = receipt;
assert.equal(backlinkId, idFor(baseReceipt));
assert.equal(receipt.protocol, "ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK");
assert.equal(receipt.move, 117);
assert.equal(receipt.repository, "ANTIMATTERIUM/WWW");
assert.equal(receipt.surfaceVersion, "0.1.67");
assert.equal(receipt.surfaceTag, "v0.1.67-antimatterium-www-control-v0256-backlink");
assert.equal(receipt.sourceControl.version, "0.2.56");
assert.equal(receipt.sourceControl.tag, "v0.2.56-antimatterium-control-move115-surface-closure");
assert.equal(receipt.sourceControl.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.56-antimatterium-control-move115-surface-closure");
assert.equal(receipt.sourceControl.verifyCiRun, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29196327916");
assert.equal(receipt.sourceControl.mainSha, "10f9ca7a645ce99ee98e5e5447bb9d36fd371023");
assert.equal(receipt.sourceControl.closureId, "5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc");
assert.equal(receipt.assertions.shortPublicTagRequired, true);
assert.equal(receipt.assertions.noLocalRootRequired, true);
assert.equal(receipt.assertions.noCurrentProductionClaim, true);
assert.equal(receipt.assertions.noStarshipClaim, true);
assert.equal(receipt.assertions.noPhysicalProductionInstructions, true);

console.log("ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_CONTROL_V0256_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_CONTROL_V0256_MEMBER=true");
console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ANTIMATTERIUM_WWW_MOVE117_CONTROL_V0256_BACKLINK_ID=" + backlinkId);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
