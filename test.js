const childProcess = require('child_process')

const electron6 = require('electron6')
const electron7 = require('electron7')
const electron8 = require('electron8')
const electron9 = require('electron9')

const test = (electronBinary, name) => {
  console.log(`Starting ${name}`)
  const cp = childProcess.spawn(electronBinary, ['./main.js'], {env: {ELECTRON_RUN_AS_NODE: '1'}})
  cp.stdout.on('data', (data) => console.log(`STDOUT ${name}:`, data.toString().replace(/\n$/, '')))
  cp.stderr.on('data', (data) => console.log(`STDERR ${name}:`, data.toString().replace(/\n$/, '')))
  return new Promise(resolve => cp.once('exit', resolve))
}

const main = async () => {
  await test(process.execPath, 'node')
  await test(electron6, 'electron6')
  await test(electron7, 'electron7')
  await test(electron8, 'electron8')
  await test(electron9, 'electron9')
}

main()
