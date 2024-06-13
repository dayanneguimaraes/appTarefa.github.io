// import Vue from 'vue';
import Vuex from 'vuex';
import modules from '@/store/modules';
import createPersistedState from 'vuex-persistedstate';

const authState = createPersistedState({
    paths: ['auth'],
    storage: {
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: (key) => localStorage.removeItem(key),
        removeAllKeys: () => localStorage.removeAllKeys(),
        getAllKey: () => localStorage.getAllKey()
    }
})

export default new Vuex.Store({
    state:{},
    plugins: [authState],
    modules
});