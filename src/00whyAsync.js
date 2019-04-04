const { doAsyncWork } = require('../api/whyAsync')

const main = () => {
  console.log('Clocking in, time to do some async work.')

  const result = doAsyncWork()

  console.log('Done!')

  return result
}

export default main
