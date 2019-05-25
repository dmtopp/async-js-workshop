const { simulateAsync } = require('../helpers/asyncFunctions')
const { handleError, handleSuccess } = require('../helpers/handleResults')

/*
  01 Intro to error-first callbacks
  - write an error-first callback for this function
  - if there is an error, pass it to handleError()
  - otherwise, pass the results to handleSuccess()
  - use "npm run 01" to check your results
*/

/* simulateAsync()
  @param {function} [callback] - error-first callback
*/

const main = () => {
  simulateAsync((error, data) => {
    if (error) {
      handleError(error)
    } else {
      handleSuccess(data)
    }
  })
}

module.exports = main
