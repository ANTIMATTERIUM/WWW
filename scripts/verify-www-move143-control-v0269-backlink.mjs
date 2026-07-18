#!/usr/bin/env node
import fs from 'node:fs';
import crypto from 'node:crypto';

function fail(message) {
  console.error(message);
  process.exit(1);
}

function stable(value) {
  if (Array.isArray(value)) {
    return '[' + value.map(stable).join(',') + ']';
  }

  if (value && typeof value === 'object') {
    return '{' + Object.keys(value)
      .sort()
      .map(key => JSON.stringify(key) + ':' + stable(value[key]))
      .join(',') + '}';
  }

  return JSON.stringify(value);
}

const receipt = JSON.parse(
  fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE143_CONTROL_V0269_BACKLINK.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.surface_control_backlink.v1",
  "move": 123,
  "surface": "www",
  "packageVersion": "0.1.80",
  "packageTag": "v0.1.80-antimatterium-www-control-v0269-backlink",
  "packageRelease": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.80-antimatterium-www-control-v0269-backlink",
  "controlVersion": "0.2.69",
  "controlTag": "v0.2.69-antimatterium-control-move141-surface-closure",
  "controlRelease": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.69-antimatterium-control-move141-surface-closure",
  "controlCi": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29655274264",
  "controlSha": "e78622f490ae36a2b2c4bb672191d5c4d2b90659",
  "controlClosureId": "63c59d3b79e4d34cec2f33f72fc898aba3e8a1311f664f62b247107054b2b31d",
  "backlinkId": "d2dee8f8f445b6027e2d789fb3139501ea720074814e09bf348da4f65abbd313"
};
const outputPrefix = "ANTIMATTERIUM_WWW_MOVE143_CONTROL_V0269_BACKLINK";

const checks = [
  ['schema', receipt.schema, expected.schema],
  ['move', receipt.move, expected.move],
  ['surface', receipt.surface, expected.surface],
  ['package.version', receipt.package?.version, expected.packageVersion],
  ['package.tag', receipt.package?.tag, expected.packageTag],
  ['package.release', receipt.package?.release, expected.packageRelease],
  ['authority.control_version', receipt.authority?.control_version, expected.controlVersion],
  ['authority.control_tag', receipt.authority?.control_tag, expected.controlTag],
  ['authority.control_release', receipt.authority?.control_release, expected.controlRelease],
  ['authority.verify_ci_run', receipt.authority?.verify_ci_run, expected.controlCi],
  ['authority.main_sha', receipt.authority?.main_sha, expected.controlSha],
  ['authority.closure_id', receipt.authority?.closure_id, expected.controlClosureId],
  ['membership.member_of_move143_surface_fanout', receipt.membership?.member_of_move143_surface_fanout, true],
  ['membership.control_v0269_release_bound', receipt.membership?.control_v0269_release_bound, true],
  ['membership.short_public_tag_required', receipt.membership?.short_public_tag_required, true],
  ['membership.no_local_root_required', receipt.membership?.no_local_root_required, true],
  ['safety.no_current_production_claim', receipt.safety?.no_current_production_claim, true],
  ['safety.no_starship_claim', receipt.safety?.no_starship_claim, true],
  ['safety.no_physical_production_instructions', receipt.safety?.no_physical_production_instructions, true],
  ['backlink_id', receipt.backlink_id, expected.backlinkId]
];

for (const [name, actual, wanted] of checks) {
  if (actual !== wanted) {
    fail(
      'MOVE143_CHECK_FAILED ' +
      name +
      ': expected ' +
      wanted +
      ', got ' +
      actual
    );
  }
}

const canonical = structuredClone(receipt);
delete canonical.backlink_id;

const recomputed = crypto
  .createHash('sha256')
  .update(stable(canonical))
  .digest('hex');

if (recomputed !== receipt.backlink_id) {
  fail(
    'MOVE143_BACKLINK_ID_RECOMPUTE_FAILED expected ' +
    receipt.backlink_id +
    ', got ' +
    recomputed
  );
}

console.log(outputPrefix + '_VERIFY_PASS=true');
console.log(outputPrefix + '_CONTROL_V0269_RELEASE_BOUND=true');
console.log(outputPrefix + '_CONTROL_V0269_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(outputPrefix + '_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
