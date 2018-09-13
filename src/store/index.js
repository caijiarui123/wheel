import Vue from 'vue';
import Vuex, {Store} from 'vuex';

import app from './modules/app';
import detail from './modules/detail';
import login from './modules/login';
import quotation from './modules/quotation';
import city from './modules/city'

Vue.use(Vuex)

let store = new Store({
    modules: {
        app,
        detail,
        login,
        quotation,
        city
    }
})
window.store=store
export default store