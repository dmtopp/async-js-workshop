const { doAsyncWork } = require('../api/promises')

const main = () => {
  console.log('Clocking in, time to do some async work.')

  // doAsyncWork now returns a promise -- use it to handle the results of doAsyncWork
  // it should console.log the results of the function if successful
  // it should console.log a friendly error message if an error occured
  doAsyncWork()

  console.log('Done!')
}

export default main
