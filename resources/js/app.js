require('./bootstrap');

import Vue from 'vue'
import App from './App.vue';
import router from './routes/router.js'
import Vuetify from '../plugins/vuetify.js'
import store from '../js/store/index.js'


const app = new Vue({
    el: '#app',
    router: router,
    vuetify: Vuetify,
    store,
    render: h => h(App)
});
