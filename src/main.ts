import { createApp } from 'vue'
import VueRouter from 'vue-router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import Auth from './components/Auth.vue'
import Page1 from './components/Page1.vue'
import {createStore} from "vuex";

const routes = [
    {
        path: '/',
        component: Auth
    },
    {
        path: '/page1',
        component: Page1
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const store = createStore({
    state() {
        return {
            usernick: "",
            username: ""
        }
    },
    mutations: {
        updateInfo(state: any, payload) {
            state.usernick = payload.usernick;
            state.username = payload.username;
        }
    }
})

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
