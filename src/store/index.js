
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import article from './modules/article';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', // 严格模式强调通过mutation来改变state而不能直接通过this.$store.state.props= news的方式改变
    plugins: [createLogger()],
    modules: {
        user,
        article
    },
    state: {
        number: 1,
        age: 26,
        type: 'single dog'
    },

    mutations: {
        changeType(state, newType) {
            state.type = newType
        }
    },
    getters: {
        getType(state,getters) {
            return {
                type: state.type,
                number: getters.getNumber
            }
        },
        getNumber(state) {
            return state.number
        },
        getAge : (state, getters) => ( range ) =>{
            return (state.age + getters.getNumber ) > range
        }
    },
    actions: {
        changeType({commit}, newType) {
            commit('changeType',newType)
        }
    }
})
