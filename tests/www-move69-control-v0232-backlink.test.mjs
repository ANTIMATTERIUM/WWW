import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-www-move69-control-v0232-backlink.mjs');

test('WWW Move 69 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE69_CONTROL_V0232_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_WWW_MOVE69_CONTROL_V0232_BACKLINK_ID=e4210f9ade5a9d97d0196b549692b08dc39a9522ff7560af48ed03d57eff7d86/);
});
