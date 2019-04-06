module.exports = (desiredResults = { message: 'Success!' }) => {
  if (Math.random() > 0.5) {
    return {
      error: { message: 'An error occured!' },
      data: null,
    }
  }

  return {
    error: null,
    data: desiredResults,
  }
}
