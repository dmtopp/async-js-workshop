const ex02 = require('../02')
const returnDataOrThrowError = require('../helpers/returnDataOrThrowError')
const { handleError, handleSuccess } = require('../helpers/handleResults')
const { CREDENTIALS, LAUNCH_CODES } = require('../helpers/asyncFunctions')

describe('ex02', () => {
  it('handleError should be called if hackMainframe fails', () => {
    const result = {
      error: { message: 'Oh no!' },
      data: null,
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex02()

    expect(handleError).toHaveBeenCalledWith(result.error)
  })

  it('handleError should be called if getLaunchCodes fails', () => {
    const result = {
      error: null,
      data: { credentials: 'are wrong!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex02()

    expect(handleError).toHaveBeenCalledWith({ message: 'Incorrect credentials!' })
  })

  it('handleSuccess should be called with the launch codes', () => {
    const result = {
      error: null,
      data: CREDENTIALS,
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex02()

    expect(handleSuccess).toHaveBeenCalledWith(LAUNCH_CODES)
  })
})
