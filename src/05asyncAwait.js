const { doAsyncWork } = require('../api/errorFirstCallbacks')

const main = () => {
  console.log('Clocking in, time to do some async work.')

  // use the async and await keywords to handle the results of this function
  // it should console.log the results of the function if successful
  // it should console.log a friendly error message if an error occured while doing work
  doAsyncWork()

  console.log('Done!')
}

export default main
