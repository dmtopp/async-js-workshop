const { doAsyncWork } = require('./helpers/asyncFunctions')
const { handleError, handleSuccess } = require('./helpers/handleResults')

const main = () =>
  /* doAsyncWork now returns a promise -- use it to handle your results
  if there is an error, pass it to handleError
  otherwise, pass the results to handleSuccess */
  doAsyncWork()

// what does main() return?
// what happens if we return a value from our .then?
// what happens if we return a value from our .catch?

export default main
