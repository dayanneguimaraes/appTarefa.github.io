import authActions from "./authActions";
import authGetters from "./authGetters";
import authMutations from "./authMutations";
import authState from "./authState";

export default {
    namespaced: true,
    state: authState,
    mutations: authMutations,
    getters: authGetters,
    actions: authActions,
};