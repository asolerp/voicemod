import {
  USER_REQUEST,
  USER_ERROR, USER_SUCCESS,
  USER_UPDATE, USER_UPDATE_REQUEST,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_DELETE_REQUEST
} from '../actions/user'

import Vue from 'vue'
import { AUTH_LOGOUT } from '../actions/auth'

const localProfile = localStorage.getItem('profile')

const state = {
  status: '',
  profile: JSON.parse(localProfile) || {}
}

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
}

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, userID) => {
    commit(USER_REQUEST)
    Vue.axios.get(`/users/${userID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-token')}`
      }
    })
      .then(resp => {
        commit(USER_SUCCESS, resp.data)
      })
      .catch(() => {
        commit(USER_ERROR)
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },
  [USER_UPDATE_REQUEST]: ({ commit, dispatch }, user) => {
    commit(USER_REQUEST)
    Vue.axios.put('/users/updateuser', user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-token')}`
      }
    })
      .then(resp => {
        commit(USER_SUCCESS, resp.data.user)
      })
      .catch(() => {
        commit(USER_ERROR)
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },
  [USER_UPDATE_PASSWORD_REQUEST]: ({ commit, dispatch }, newPassword) => {
    commit(USER_REQUEST)
    Vue.axios.put('/users/updatepassword', { password: newPassword }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-token')}`
      }
    })
      .then(resp => {
        commit(USER_SUCCESS, resp.data.user)
        Vue.$toast.open({
          message: '<span style="font-weight: 500; font-size: 20px; font-family: Roboto">Password updated</span>',
          type: 'success'
        })
      })
      .catch(() => {
        commit(USER_ERROR)
        dispatch(AUTH_LOGOUT)
        Vue.$toast.open({
          message: '<span style="font-weight: 500; font-size: 20px; font-family: Roboto">Something went wrong..</span>',
          type: 'error'
        })
      })
  },
  [USER_DELETE_REQUEST]: ({ commit, dispatch }, user) => {
    commit(USER_REQUEST)
    Vue.axios.delete('/users/deleteuser', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-token')}`
      }
    })
      .then(resp => {
        commit(USER_SUCCESS, {})
        dispatch(AUTH_LOGOUT)
      })
      .catch(() => {
        commit(USER_ERROR)
        dispatch(AUTH_LOGOUT)
      })
  }
}

const mutations = {
  [USER_REQUEST]: state => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success'
    localStorage.setItem('profile', JSON.stringify({
      email: resp.email,
      name: resp.name,
      surname: resp.surname,
      phone: resp.phone,
      country: resp.country,
      postalCode: resp.postalCode
    }))
    Vue.set(state, 'profile', resp)
  },
  [USER_UPDATE]: (state, resp) => {
    state.profile[resp.key] = resp.value
  },
  [USER_ERROR]: state => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: state => {
    state.profile = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
