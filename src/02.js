const { handleError, handleSuccess } = require('./helpers/handleResults')
const { hackMainframe, getLaunchCodes } = require('./helpers/asyncFunctions')

/*
  02 Chaining error-first callbacks
  - this exercise has two async functions: hackMainframe and getLaunchCodes
  - getLaunchCodes takes the result of hackMainframe as its first argument
  - if there is an error, pass it to handleError()
  - otherwise, pass the results to handleSuccess()
*/

/* hackMainframe()
  @param {function} [callback] - error-first callback
*/

/* getLaunchCodes()
  @param {string} [credentials] - result from hackMainframe()
  @param {function} [callback] - error-first callback
*/

const main = () => {
  // your code here
}

module.exports = main
