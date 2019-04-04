const { hackMainframe, getLaunchCodes, launchNukes } = require('../api/errorFirstCallbacks')

// TODO document function signatures

const main = () => {
  console.log('Clocking in, time to do some async work.')

  // in this exercise we'll be simulating a day at a secret CIA data center
  // we'll need to do three async things: hack into the mainframe, steal launch
  // codes, and then launch nukes.
  // you'll need to use several error-first callbacks to pass the results of one
  // async function into the next

  console.log('BOOM! I love the sound of freedom.')
}
