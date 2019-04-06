const { handleError, handleSuccess } = require('../helpers/handleResults')
const { hackMainframe, getLaunchCodes } = require('../helpers/asyncFunctions')

/* hackMainframe()
  @param {function} [callback] - error-first callback
*/

/* getLaunchCodes()
  @param {string} [credentials] - result from hackMainframe()
  @param {function} [callback] - error-first callback
*/

const getLaunchCodesCb = (error, launchCodes) => {
  if (error) {
    handleError(error)
  } else {
    handleSuccess(launchCodes)
  }
}

const hackMainframeCb = (error, credentials) => {
  if (error) {
    handleError(error)
  } else {
    getLaunchCodes(credentials, getLaunchCodesCb)
  }
}

const main = () => {
  /* In this exercise we'll be simulating a day at a secret CIA data center.
  We'll need to do two async things: hack into the mainframe and then get
  some launch codes. You'll need to use several error-first callbacks to
  pass the results of one async function into the next.

  Pass any errors to handleError(), and pass the final success message to handleSuccess() */

  hackMainframe(hackMainframeCb)
}

module.exports = main
