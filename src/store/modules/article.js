export default {
    namespaced: true,
    state: {
        article: '文章',
        pageView: 10
    },
    getters: {
        getViews(state){
            return state.pageView
        }
    },
    mutations: {
        addViews(state, payload){
            state.pageView = payload
        }
    },
    actions: {
        addViews({commit}, payload) {
            commit('addViews',payload)
        }
    }
}