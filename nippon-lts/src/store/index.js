import { createStore } from 'vuex'
import apiService from './api.service'

export default createStore({
  state: {
    user: null,
    isAuth: false,
    error: null
  },
  getters: {
    user: state => state.user,
    isAuth: state => state.isAuth,
    error: state => state.error
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setAuthentication(state, isAuth) {
      state.isAuth = isAuth
    },
    setError(state, error) {
      state.error = error
    }
  },
  actions: {

    async signUp({ commit }, { username, password }) {
      try {
        const response = await apiService.SignUp(username, password);
        commit('setUser', response.data)
        commit('setAuth', true)
        commit('setError', null)
      } catch {
        commit('setError', 'Erro no cadastro. tente novamente')
      }
    },

    async signIn({ commit }, { username, password }) {
      try {
        const response = await apiService.SignIn(username, password)
        commit('setUser', response.data)
        commit('setAuth', true)
        commit('setError', null)
      } catch {
        commit('setError', 'Credenciais inválidas, tente novamente')
      }
    },
    
    signOut({ commit }) {
      commit('setUser', null)
      commit('setAuth', false)
      commit('setError', null)
    }

  },
  modules: {}
})
