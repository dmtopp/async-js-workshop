const ex03 = require('../03')
const returnDataOrThrowError = require('../helpers/returnDataOrThrowError')
// const { handleError, handleSuccess } = require('../helpers/handleResults')

describe('ex03', () => {
  it('should return a promise', () => {
    const success = {
      error: null,
      data: { message: 'Success!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(success)

    const result = ex03()

    expect(result).toBeInstanceOf(Promise)
  })

  it('the promise should reject if an error occured', async () => {
    const fail = {
      error: { message: 'Oh no!' },
      data: null,
    }
    returnDataOrThrowError.mockReturnValueOnce(fail)

    try {
      await ex03()
      expect(true).toBe(false) // fail test if reject() not used
    } catch (e) {
      expect(e).toEqual(fail.error)
    }
  })

  it('the promise should resolve if there was no error', async () => {
    const success = {
      error: null,
      data: { message: 'Success!' },
    }
    returnDataOrThrowError.mockReturnValueOnce(success)

    const result = await ex03()

    expect(result).toEqual(success.data)
  })
})
