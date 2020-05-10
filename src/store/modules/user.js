export default {
    namespaced: true,
    state: {
        username: '章若楠',
        password: '好看'
    },
    getters: {
        getState(state, getters,rootState){
            return {
                username: state.username,
                pwd: getters.getPwd,
                root: rootState
            }
        },
        getPwd(state){
            return state.password
        }
    },
    mutations: {
        updateUsername(state, payload){
            state.username = payload
        }
    },
    actions: {
        updateName({commit}, payload) {
            commit('updateUsername',payload)
        }
    }
}