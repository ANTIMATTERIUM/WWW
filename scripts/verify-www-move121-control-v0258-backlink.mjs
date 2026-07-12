#!/usr/bin/env node
import fs from 'node:fs';
import crypto from 'node:crypto';

function fail(message) {
  console.error(message);
  process.exit(1);
}

function stable(value) {
  if (Array.isArray(value)) return '[' + value.map(stable).join(',') + ']';
  if (value && typeof value === 'object') {
    return '{' + Object.keys(value).sort().map(k => JSON.stringify(k) + ':' + stable(value[k])).join(',') + '}';
  }
  return JSON.stringify(value);
}

const receiptPath = "public/receipts/ANTIMATTERIUM_WWW_MOVE121_CONTROL_V0258_BACKLINK.json";
const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));

const expected = {
  schema: 'antimatterium.public_surface_backlink.v1',
  move: 121,
  prefix: "WWW",
  label: "WWW",
  repo: "ANTIMATTERIUM/WWW",
  package: "@antimatterium/www",
  version: "0.1.69",
  tag: "v0.1.69-antimatterium-www-control-v0258-backlink",
  release: "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.69-antimatterium-www-control-v0258-backlink",
  control_version: "0.2.58",
  control_tag: "v0.2.58-antimatterium-control-move119-surface-closure",
  control_release: "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.58-antimatterium-control-move119-surface-closure",
  control_ci_run: "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29200037531",
  control_main_sha: "e9ba24b46fb5ea31d036e0db1eb698946af75353",
  control_closure_id: "cb9d670f584aa1a966bbcb5f2cd36aa1da7ac6bd8a68f36ac283a79d776f34dd",
  backlink_id: "52d52363aec015ecdad4f846be5eba8dc79a6b5aa6e0501ac130c00a32c6c7be"
};

const checks = [
  ['schema', receipt.schema, expected.schema],
  ['move', receipt.move, expected.move],
  ['surface.prefix', receipt.surface?.prefix, expected.prefix],
  ['surface.label', receipt.surface?.label, expected.label],
  ['surface.repo', receipt.surface?.repo, expected.repo],
  ['surface.package', receipt.surface?.package, expected.package],
  ['surface.version', receipt.surface?.version, expected.version],
  ['surface.tag', receipt.surface?.tag, expected.tag],
  ['surface.release', receipt.surface?.release, expected.release],
  ['source_control.version', receipt.source_control?.version, expected.control_version],
  ['source_control.tag', receipt.source_control?.tag, expected.control_tag],
  ['source_control.release', receipt.source_control?.release, expected.control_release],
  ['source_control.verify_ci_run', receipt.source_control?.verify_ci_run, expected.control_ci_run],
  ['source_control.main_sha', receipt.source_control?.main_sha, expected.control_main_sha],
  ['source_control.closure_id', receipt.source_control?.closure_id, expected.control_closure_id],
  ['backlink_id', receipt.backlink_id, expected.backlink_id],
  ['membership.control_release_bound', receipt.membership?.control_release_bound, true],
  ['membership.public_surface_backlink_bound', receipt.membership?.public_surface_backlink_bound, true],
  ['membership.short_public_tag_required', receipt.membership?.short_public_tag_required, true],
  ['membership.no_local_root_required', receipt.membership?.no_local_root_required, true],
  ['safety.no_current_production_claim', receipt.safety?.no_current_production_claim, true],
  ['safety.no_starship_claim', receipt.safety?.no_starship_claim, true],
  ['safety.no_physical_production_instructions', receipt.safety?.no_physical_production_instructions, true]
];

for (const [name, actual, exp] of checks) {
  if (actual !== exp) fail(`MOVE121_WWW_CHECK_FAILED ${name}: expected ${exp}, got ${actual}`);
}

const recomputeBase = structuredClone(receipt);
delete recomputeBase.backlink_id;
const recomputed = crypto.createHash('sha256').update(stable(recomputeBase)).digest('hex');
if (recomputed !== receipt.backlink_id) fail('MOVE121_BACKLINK_ID_RECOMPUTE_FAILED');

console.log('ANTIMATTERIUM_WWW_MOVE121_CONTROL_V0258_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_WWW_MOVE121_CONTROL_V0258_BACKLINK_CONTROL_V0258_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_WWW_MOVE121_CONTROL_V0258_BACKLINK_CONTROL_V0258_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_WWW_MOVE121_CONTROL_V0258_BACKLINK_ID=' + receipt.backlink_id);
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
