const ex01 = require('../solutions/01errorFirstCallbacks')
const returnDataOrThrowError = require('../helpers/returnDataOrThrowError')
const { handleError, handleSuccess } = require('../helpers/handleResults')

describe('ex01', () => {
  it('handleError should be called if there is an error', () => {
    const result = {
      error: { message: 'Oh no!' },
      data: null,
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex01()

    expect(handleError).toHaveBeenCalledWith(result.error)
  })

  it('handleSuccess should be called if there was no error', () => {
    const result = {
      error: null,
      data: { message: 'Success!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex01()

    expect(handleSuccess).toHaveBeenCalledWith(result.data)
  })
})
