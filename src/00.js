const { doAsyncWork } = require('./helpers/asyncFunctions')

// 00 -- Why is async hard?
// what will this function return?

const main = () => {
  console.log('Clocking in, time to do some async work.')

  const result = doAsyncWork()

  console.log('Done!')

  return result
}

export default main
