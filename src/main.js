import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Carframe from './views/car-frame'
import Carlicense from './views/car-license'
import index from './views/index.vue'
import Carzaibao from './views/cars-zaibao.vue'
import nocar from './views/no-car.vue'
import $ from 'jquery'
import Vuex from 'vuex'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);



const routes=[
        {path: '/carframe', component: Carframe},
        { path: '/carlicense', component: Carlicense},
        {path:'/carzaibao',component:Carzaibao},
        {path:'/nocar',component:nocar},
        {path:'/index',component:index},
        { path: '*', redirect: '/index' }
    ]
const router = new VueRouter({

    routes,
})
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable no-new */
