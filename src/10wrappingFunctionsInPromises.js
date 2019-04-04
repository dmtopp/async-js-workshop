const { doAsyncWork } = require('../api/wrapInPromises')

const main = () => {
  console.log('Clocking in, time to do some async work.')

  // doAsyncWork takes an error-first callback
  // update main() to return a new Promise
  // the the promise should resolve if successful, and reject if an error happens

  console.log('Done!')
}
