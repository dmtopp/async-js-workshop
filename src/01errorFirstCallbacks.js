const { simulateAsync } = require('./helpers/asyncFunctions')
const { handleError, handleSuccess } = require('./helpers/handleResults')
// use these guys ^ to handle the async response

const main = () => {
  /* write an error-first callback for this function
  if there is an error, pass it to handleError
  otherwise, pass the results to handleSuccess */
  simulateAsync()
}

module.exports = main
