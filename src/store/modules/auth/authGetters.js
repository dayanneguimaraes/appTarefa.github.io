export default {
    isAuthenticated: (state) => !!state.key,
    name: (state) => state.name,
    cargo: (state) => state.cargo,
    locale: (state) => state.locale
}