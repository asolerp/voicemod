import { getters } from '../../src/store/modules/auth'

describe('isAuthenticated', () => {
  it('should return if is authenticated', () => {
    const token = 'adsfaeef32423424dadafds'
    const state = { token }
    const result = true

    expect(getters.isAuthenticated(state)).toEqual(result)
  })
})

describe('authStatus', () => {
  it('should return the auth status', () => {
    const status = 'loading'
    const state = { status }
    const result =  'loading'

    expect(getters.authStatus(state)).toEqual(result)
  })
})