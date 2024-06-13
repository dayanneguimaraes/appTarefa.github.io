import "./assets/main.css";
import "./theme/styles.stylus";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from '@/store';
import Vuex from 'vuex';
import i18n from '@/translate/i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartColumn, faCheck, faCircle, faEllipsisVertical, faGears, faMagnifyingGlass, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const app = createApp(App);

store.commit('auth/setLocale', 'pt-BR');

library.add(faCheck);
library.add(faCircleCheck);
library.add(faChartColumn);
library.add(faGears);
library.add(faEllipsisVertical);
library.add(faPlus);
library.add(faCircle);
library.add(faMagnifyingGlass);
library.add(faXmark);

// Vue.config.productionTip = false;
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(i18n)
app.use(Vuex);
app.use(router);
app.use(store);

app.mount("#app");
