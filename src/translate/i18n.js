import store from '@/store';
import { createI18n } from 'vue-i18n';
import messages_pt_BR from "./messages_pt-BR.json";
import messages_en from "./messages_en.json";

const messages = {
  'pt-BR': messages_pt_BR,
  'en-US': messages_en
};

const i18n = createI18n({
  locale: store.state.auth.locale ? store.state.auth.locale : 'pt-BR',
  fallbackLocale: ['pt-BR', 'en-US'],
  messages
});

export default i18n;
