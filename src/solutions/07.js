const { simulateAsync } = require('../helpers/asyncFunctions')

/*
  07 Wrapping callbacks in a promise
  - simulateAsync still takes an error-first callback
  - return a new Promise from main
  - if simulateAsync executed successfully, the promise should resolve
  - if simulateAsync fails, the promise should reject
*/

/* simulateAsync()
  @param {function} [callback] - error-first callback
*/

const main = () =>
  new Promise((resolve, reject) => {
    simulateAsync((error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })

module.exports = main
