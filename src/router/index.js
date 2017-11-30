import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
import List from '@/components/list'
import sendTopic from '@/components/sendTopic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/List',
      name: 'List',
      component: List
    },
     {
       path: '/sendTopic',
       name: 'sendTopic',
       component: sendTopic
     },
     {
       path: '/detail/:id',
       name: 'detail',
       component: detail
     }

  ],
    linkActiveClass: 'active'
})
