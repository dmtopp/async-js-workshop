const timeout = require('./timeout')
const getResults = require('./returnDataOrThrowError')

const getRandomDelay = () => 3000 - (Math.floor(Math.random()) * 2000)
const CREDENTIALS = { username: 'CIABot32000', password: '00000000000' }
const LAUNCH_CODES = { nukes: '12345', marsMissions: '88888', blog: 'abc123yz' }

const simulateAsync = (callback) => {
  timeout(() => {
    const { error, data } = getResults()
    callback(error, data)
  }, getRandomDelay())
}

const hackMainframe = (callback) => {
  timeout(() => {
    const { error, data } = getResults(CREDENTIALS)
    callback(error, data)
  }, getRandomDelay())
}

const getLaunchCodes = (credentials, callback) => {
  timeout(() => {
    if (credentials === CREDENTIALS) {
      callback(null, LAUNCH_CODES)
    } else {
      callback({ message: 'Incorrect credentials!' }, null)
    }
  })
}

const doAsyncWork = () =>
  new Promise((resolve, reject) => {
    timeout(() => {
      const { error, data } = getResults(CREDENTIALS)
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })

const hackMainframePromise = () =>
  new Promise((resolve, reject) => {
    timeout(() => {
      const { error, data } = getResults(CREDENTIALS)

      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    }, getRandomDelay())
  })

const getLaunchCodesPromise = credentials =>
  new Promise((resolve, reject) => {
    timeout(() => {
      if (credentials === CREDENTIALS) {
        resolve(LAUNCH_CODES)
      } else {
        // eslint-disable-next-line
        reject({ message: 'Incorrect credentials!' })
      }
    })
  })

module.exports = {
  simulateAsync,
  hackMainframe,
  getLaunchCodes,
  doAsyncWork,
  hackMainframePromise,
  getLaunchCodesPromise,
  CREDENTIALS,
  LAUNCH_CODES,
}
