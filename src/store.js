import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            isFetching: false,
        }
    },
    mutations: {
        setFetching(state) {
            state.isFetching = !state.isFetching;
        }
    }
})

export default store;