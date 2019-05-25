const { doAsyncWork } = require('../helpers/asyncFunctions')
const { handleError, handleSuccess } = require('../helpers/handleResults')

/*
  06 Intro to async/await
  - doAsyncWork still returns a promise (no change from ex03!)
  - use async/await instead of .then()
  - if there is an error, pass it to handleError()
  - otherwise, pass the results to handleSuccess()
*/

/* doAsyncWork()
  @returns {Promise}
*/

const main = async () => {
  try {
    const result = await doAsyncWork()
    handleSuccess(result)
  } catch (e) {
    handleError(e)
  }
}

module.exports = main
