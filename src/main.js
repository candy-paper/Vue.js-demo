import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import List from './List.vue'
import SendTopic from './SendTopic.vue'
import TopicDetail from './TopicDetail.vue'
import store from './store.js'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)
//import App from './App.vue'

const routes = [
    { path: '/list', component: List },
    { path: '/sendTopic', component: SendTopic },
    { path: '/detail/:id', component: TopicDetail }
]

const router = new VueRouter({
    routes
})

const app = new Vue({store,router}).$mount('#app')



















/*new Vue({
      el: '#app',
      render: h => h(Test)

})*/

