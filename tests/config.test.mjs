import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

test('private configuration overrides stale deployment credentials and fails closed when missing', () => {
  const directory = mkdtempSync(join(tmpdir(), 'pz-config-'))
  const file = join(directory, '.env')
  try {
    writeFileSync(file, 'JWT_SECRET=rotated-test-key\n')
    const run = path => spawnSync(process.execPath, ['--input-type=module', '-e', `
      import assert from 'node:assert/strict';
      const {createToken, requireAuth} = await import('./server/auth.js');
      const oldToken = await createToken({role:'admin'});
      await import('./server/config.js');
      assert.equal(process.env.JWT_SECRET, 'rotated-test-key');
      let rejected = false;
      await requireAuth({headers:{authorization:'Bearer '+oldToken}}, {status(code){assert.equal(code,401); return this}, json(){rejected=true}}, ()=>assert.fail('Old token accepted'));
      assert.ok(rejected);
      const newToken = await createToken({role:'admin'});
      let accepted = false;
      await requireAuth({headers:{authorization:'Bearer '+newToken}}, {status(){assert.fail('New token rejected')}}, ()=>{accepted=true});
      assert.ok(accepted);
    `], { env: { ...process.env, PZ_ENV_FILE: path, JWT_SECRET: 'old-test-key' }, encoding: 'utf8' })
    const valid = run(file)
    assert.equal(valid.status, 0, valid.stderr)
    assert.notEqual(run(join(directory, 'missing.env')).status, 0)
  } finally { rmSync(directory, { recursive: true, force: true }) }
})
