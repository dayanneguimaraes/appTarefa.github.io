const logout = ({ commit }) => {
    commit('logout');
};

const login = ({ commit }, dadosLogin) => {
    commit('login', dadosLogin);
};

export default {
    logout,
    login
};