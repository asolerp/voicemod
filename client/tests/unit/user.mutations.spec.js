import { mutations } from '../../src/store/modules/user'

describe('updateUser', () => {
  it('should update the profile by key and value', () => {
    const state = { profile: {
      name: 'Alberto'
    } }
    const item = { key: 'name', value: 'Voicemod' }

    const result = { name: 'Voicemod' }

    console.log(mutations)

    mutations.USER_UPDATE(state, item)

    expect(state.profile).toEqual(result)
  })
})