import { mutations } from '../../src/store/modules/auth'

describe('authSuccess', () => {
  it('should set success auth with token', () => {
    const state = { 
      token: '',
      status: '',
      hasLoadedOnce: false
     }
    const item = { token: 'fsdafasf7asfasd7fsad7878', status: 'success', hasLoadedOnce: true }

    const result = { token: 'fsdafasf7asfasd7fsad7878', status: 'success', hasLoadedOnce: true }

    mutations.AUTH_SUCCESS(state, item)

    expect(state).toEqual(result)
  })
})