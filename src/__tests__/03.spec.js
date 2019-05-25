const ex03 = require('../solutions/03')
const returnDataOrThrowError = require('../helpers/returnDataOrThrowError')
const { handleError, handleSuccess } = require('../helpers/handleResults')

describe('ex03', () => {
  it('handleError should be called if there is an error', () => {
    const result = {
      error: { message: 'Oh no!' },
      data: null,
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex03().then(() => {
      expect(handleError).toHaveBeenCalledWith(result.error)
    })
  })

  it('handleSuccess should be called if there was no error', () => {
    const result = {
      error: null,
      data: { message: 'Success!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(result)

    ex03().then(() => {
      expect(handleSuccess).toHaveBeenCalledWith(result.data)
    })
  })
})
