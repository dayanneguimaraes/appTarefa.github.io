import store from '@/store';

const getNomeUsuario = () => store?.state?.auth?.name;

const getCargoUsuario = () => store?.state?.auth?.cargo;

const getLocale = () => store?.state?.auth?.locale;

const isAuthenticated = () => store?.state?.auth?.isAuthenticated;

export default {
    getNomeUsuario,
    getCargoUsuario,
    getLocale,
    isAuthenticated
}