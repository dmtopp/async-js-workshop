const handleError = (error) => {
  console.error(error)
}

const handleSuccess = (data) => {
  console.log(data)
}

module.exports = {
  handleError,
  handleSuccess,
}
