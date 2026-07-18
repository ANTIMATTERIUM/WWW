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
  fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE141_CONTROL_V0268_BACKLINK.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.surface_control_backlink.v1",
  "move": 123,
  "surface": "www",
  "packageVersion": "0.1.79",
  "packageTag": "v0.1.79-antimatterium-www-control-v0268-backlink",
  "packageRelease": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.79-antimatterium-www-control-v0268-backlink",
  "controlVersion": "0.2.68",
  "controlTag": "v0.2.68-antimatterium-control-move139-surface-closure",
  "controlRelease": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.68-antimatterium-control-move139-surface-closure",
  "controlCi": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29654567950",
  "controlSha": "1b72f44cd0887ae62c23499274b1d023df35a9d1",
  "controlClosureId": "d952f0926fbb5036879e354b301b8a17a77bb1088a133be7494590ad69de2b1e",
  "backlinkId": "1d50ba398ce01f070a35153e1ad74e7460edb9ae95e97a58b57d5a9b529e3ea6"
};
const outputPrefix = "ANTIMATTERIUM_WWW_MOVE141_CONTROL_V0268_BACKLINK";

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
  ['membership.member_of_move141_surface_fanout', receipt.membership?.member_of_move141_surface_fanout, true],
  ['membership.control_v0268_release_bound', receipt.membership?.control_v0268_release_bound, true],
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
      'MOVE141_CHECK_FAILED ' +
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
    'MOVE141_BACKLINK_ID_RECOMPUTE_FAILED expected ' +
    receipt.backlink_id +
    ', got ' +
    recomputed
  );
}

console.log(outputPrefix + '_VERIFY_PASS=true');
console.log(outputPrefix + '_CONTROL_V0268_RELEASE_BOUND=true');
console.log(outputPrefix + '_CONTROL_V0268_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(outputPrefix + '_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
