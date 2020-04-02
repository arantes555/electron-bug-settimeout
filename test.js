const childProcess = require('child_process')

const electron6 = require('electron6')
const electron7 = require('electron7')
const electron8 = require('electron8')
const electron9 = require('electron9')

const test = (electronBinary, name, options = {}) => {
  console.log(`Starting ${name}...`)
  const cp = childProcess.spawn(electronBinary, ['./main.js'], options)
  cp.stdout.on('data', (data) => console.log(`STDOUT ${name}:`, data.toString().replace(/\n$/, '')))
  cp.stderr.on('data', (data) => console.log(`STDERR ${name}:`, data.toString().replace(/\n$/, '')))
  let worked = false
  cp.stdout.on('data', (data) => { if (data.includes('IT WORKED')) worked = true })
  return new Promise(resolve => cp.once('exit', resolve))
    .then(() => {
      if (worked) console.log(`✅  ${name}`)
      else console.log(`❌  ${name}`)
    })
    .then(() => console.log('')) // empty line for clarity
}

const main = async () => {
  await test(process.execPath, 'node')
  await test(electron6, 'electron6')
  await test(electron6, 'electron6 RUN_AS_NODE', {env: {ELECTRON_RUN_AS_NODE: '1'}})
  await test(electron7, 'electron7')
  await test(electron7, 'electron7 RUN_AS_NODE', {env: {ELECTRON_RUN_AS_NODE: '1'}})
  await test(electron8, 'electron8')
  await test(electron8, 'electron8 RUN_AS_NODE', {env: {ELECTRON_RUN_AS_NODE: '1'}})
  await test(electron9, 'electron9')
  await test(electron9, 'electron9 RUN_AS_NODE', {env: {ELECTRON_RUN_AS_NODE: '1'}})
}

main()
