import { createApp } from "vue";
import App from "./App.vue";
//import Vue from "vue";

import router from './router';
import 'bootstrap' ;
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap/dist/js/bootstrap.min.js'
createApp(App).use(router).mount("#app");
