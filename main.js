console.log(`RUNNING: ${process.versions.electron}`)

const wait = (t) => new Promise(resolve => {
  setTimeout(resolve, t)
})
const run = async () => {
  await wait(10)
  console.log('Intermediary')
  await wait(10)
  console.log('IT WORKED!')
  process.exit(0)
}

run()
