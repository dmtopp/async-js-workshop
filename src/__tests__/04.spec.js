const ex04 = require('../solutions/04')
const returnDataOrThrowError = require('../helpers/returnDataOrThrowError')
const { handleError, handleSuccess } = require('../helpers/handleResults')
const { CREDENTIALS, LAUNCH_CODES } = require('../helpers/asyncFunctions')

describe('ex04', () => {
  it('should return a promise', () => {
    const success = {
      error: null,
      data: { message: 'Success!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(success)

    const result = ex04()

    expect(result).toBeInstanceOf(Promise)
  })

  it('handleError should be called if hackMainframe fails', async () => {
    const result = {
      error: { message: 'Oh no!' },
      data: null,
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    await ex04()

    expect(handleError).toHaveBeenCalledWith(result.error)
  })

  it('handleError should be called if getLaunchCodes fails', async () => {
    const result = {
      error: null,
      data: { credentials: 'are wrong!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    await ex04()

    expect(handleError).toHaveBeenCalledWith({ message: 'Incorrect credentials!' })
  })

  it('handleSuccess should be called with the launch codes', async () => {
    const result = {
      error: null,
      data: CREDENTIALS,
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    await ex04()

    expect(handleSuccess).toHaveBeenCalledWith(LAUNCH_CODES)
  })
})
