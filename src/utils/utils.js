import i18n from '@/translate/i18n';

const getTranslation = (key, param, param1) => {
    if (param1) {
       return i18n.global.t(key, { param: param, param1: param1 });
    }
    return i18n.global.t(key, { param: param });
};

const getTranslationOptionString = (key, option, string) => {
    if (string && option) {
        return i18n.tc(key, option, { param: string });
    }
    return getTranslation(key);
};

export default {
    getTranslation,
    getTranslationOptionString
}