import AuthenService from '@/services/AuthenService'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user, profile:null}
  : { status: {}, user: null, profile:null }

const mutations = {
  loginRequest(state) {
    state.status = { loggingIn: true }
    state.user = user
    state.profile = null
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure(state) {
    state.status = {}
    state.user = null
    state.profile = null
  },
  logout(state) {
    state.status = {}
    state.user = null
    state.profile = null
  },
  changeProfile(state, profile) {
    state.profile = profile
  }
}

const actions = {

  async loginWithCode({ commit }, code) {
    commit('loginRequest')
    var user = await AuthenService.validate_authorize(code)
    commit('loginSuccess', user)
  },

  async setProfile({ commit }, profile) {
    commit('changeProfile', profile)
  },

  logout({ commit }) {
    AuthenService.logout()
    commit('logout')
    return true
  }
}

const getters = {
    access_token: state => {
      return state.access_token
    },
    token_type : state => {
      return state.token_type
    },
    refresh_token : state => {
      return state.refresh_token
    }
}

export const account = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}