export default {
    logout(state) {
        state.isAuthenticated = false;
        state.key = null;
        state.name = null;
        state.cargo = null;
        state.locale = null;
    },
    login(state, payload) {
        state.isAuthenticated = true;
        state.key = payload.key;
        state.name = payload.name;
        state.cargo = payload.cargo;
        state.locale = payload.locale;
    },
    setLocale(state, payload) {
        state.locale = payload;
    },
    setKey(state, payload) {
        state.key = payload.key;
    }
}