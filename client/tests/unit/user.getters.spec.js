import { getters } from '../../src/store/modules/user'

describe('getProfile', () => {
  it('should return the profile', () => {
    const profile = {
      name: 'Voicemod',
      email: 'voicemod@test.com'
    }
    const state = { profile }
    const result = {
      name: 'Voicemod',
      email: 'voicemod@test.com'
    }

    expect(getters.getProfile(state)).toEqual(result)
  })
})
