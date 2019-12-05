const exec = require('exec-sh').promise
const glob = require('fast-glob')
const fs = require('fs').promises

const convert = async () => {
  console.log(`[typecheck] Start converting MDX to TSX...`)
  const generated = []
  const entries = glob.sync(
    ['src/(components|styles|layout|helpers|internal)/**/*.mdx'],
    {
      dot: true,
    }
  )
  for (let entry of entries) {
    console.log(`[typecheck]   convert: ${entry}`)
    const path = `${entry}.tsx`
    await exec(`node scripts/mdx2tsx.js < ${entry} > ${path}`)
    generated.push(path)
  }
  return generated
}

const typecheck = async () => {
  try {
    await exec(`./node_modules/typescript/bin/tsc --noEmit`)
    console.log(`[typecheck] Passed.`)
    return true
  } catch (e) {
    console.error(`[typecheck] Failed.`)
    return false
  }
}

const cleanup = async generated => {
  console.log(`[typecheck] Cleaning up generated TSX files...`)
  for (let entry of generated) {
    console.log(`[typecheck]   delete: ${entry}`)
    await fs.unlink(entry)
  }
}

const run = async () => {
  const generated = await convert()
  const ret = await typecheck()
  await cleanup(generated)
  if (!ret) {
    process.exitCode = 1
  }
  console.log(`[typecheck] Done`)
}
run()
