const { handleError, handleSuccess } = require('./helpers/handleResults')
const { hackMainframePromise, getLaunchCodesPromise } = require('./helpers/asyncFunctions')

/*
  07 Multiple promises with async/await
  - hackMainframe and getLaunchCodes still return promises
  - use async/await instead of .then()
  - pass the results of hackMainframe into getLaunchCodes
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

const main = async () => {
  // your code here
}

module.exports = main
