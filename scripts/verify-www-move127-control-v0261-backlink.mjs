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
  fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE127_CONTROL_V0261_BACKLINK.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.surface_control_backlink.v1",
  "move": 123,
  "surface": "www",
  "packageVersion": "0.1.72",
  "packageTag": "v0.1.72-antimatterium-www-control-v0261-backlink",
  "packageRelease": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.72-antimatterium-www-control-v0261-backlink",
  "controlVersion": "0.2.61",
  "controlTag": "v0.2.61-antimatterium-control-move125-surface-closure",
  "controlRelease": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.61-antimatterium-control-move125-surface-closure",
  "controlCi": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29205745933",
  "controlSha": "2e514a95c2fda3c46a63eab206b3a3dee2459f4b",
  "controlClosureId": "9d1a849ced65fff3f4df4794c906575976131659581bdbbeb9d051b554513e45",
  "backlinkId": "59d02ae226be19af900f34c6e151032400c657c2f3a2cc46f714ef21f146df3b"
};
const outputPrefix = "ANTIMATTERIUM_WWW_MOVE127_CONTROL_V0261_BACKLINK";

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
  ['membership.member_of_move127_surface_fanout', receipt.membership?.member_of_move127_surface_fanout, true],
  ['membership.control_v0261_release_bound', receipt.membership?.control_v0261_release_bound, true],
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
      'MOVE127_CHECK_FAILED ' +
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
    'MOVE127_BACKLINK_ID_RECOMPUTE_FAILED expected ' +
    receipt.backlink_id +
    ', got ' +
    recomputed
  );
}

console.log(outputPrefix + '_VERIFY_PASS=true');
console.log(outputPrefix + '_CONTROL_V0261_RELEASE_BOUND=true');
console.log(outputPrefix + '_CONTROL_V0261_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(outputPrefix + '_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
