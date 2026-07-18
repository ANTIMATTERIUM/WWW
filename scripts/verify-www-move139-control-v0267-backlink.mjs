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
  fs.readFileSync("public/receipts/ANTIMATTERIUM_WWW_MOVE139_CONTROL_V0267_BACKLINK.json", 'utf8')
);

const expected = {
  "schema": "antimatterium.surface_control_backlink.v1",
  "move": 123,
  "surface": "www",
  "packageVersion": "0.1.78",
  "packageTag": "v0.1.78-antimatterium-www-control-v0267-backlink",
  "packageRelease": "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.78-antimatterium-www-control-v0267-backlink",
  "controlVersion": "0.2.67",
  "controlTag": "v0.2.67-antimatterium-control-move137-surface-closure",
  "controlRelease": "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.67-antimatterium-control-move137-surface-closure",
  "controlCi": "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29653800567",
  "controlSha": "3eaa90d7b8850687431a47a5c8419f4bca6bfb0c",
  "controlClosureId": "fbc4bbb9a4f22f09657e0a5e9c9e1c6061e8640272e6c87dfc6b20933f3014a1",
  "backlinkId": "6b4605f0bfd7f9b1ced08a94670008a5b9df8874b29f93abbe349b1cd1e5d925"
};
const outputPrefix = "ANTIMATTERIUM_WWW_MOVE139_CONTROL_V0267_BACKLINK";

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
  ['membership.member_of_move139_surface_fanout', receipt.membership?.member_of_move139_surface_fanout, true],
  ['membership.control_v0267_release_bound', receipt.membership?.control_v0267_release_bound, true],
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
      'MOVE139_CHECK_FAILED ' +
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
    'MOVE139_BACKLINK_ID_RECOMPUTE_FAILED expected ' +
    receipt.backlink_id +
    ', got ' +
    recomputed
  );
}

console.log(outputPrefix + '_VERIFY_PASS=true');
console.log(outputPrefix + '_CONTROL_V0267_RELEASE_BOUND=true');
console.log(outputPrefix + '_CONTROL_V0267_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log(outputPrefix + '_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
