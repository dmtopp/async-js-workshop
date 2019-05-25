const { handleError, handleSuccess } = require('../helpers/handleResults')
const { hackMainframePromise, getLaunchCodesPromise } = require('../helpers/asyncFunctions')

/*
  05 Chaining promises
  - hackMainframe and getLaunchCodes now both return promises
  - use promise chaining to pass the results of hackMainframe to getLaunchCodes
  - if there is an error, pass it to handleError()
  - otherwise, pass the results to handleSuccess()
*/

/* hackMainframePromise()
  @returns {Promise}
*/

/* getLaunchCodesPromise()
  @param {string} [credentials] - result from hackMainframe()
  @returns {Promise}
*/

const main = () =>
  hackMainframePromise()
    .then(getLaunchCodesPromise)
    .then(handleSuccess)
    .catch(handleError)

module.exports = main
