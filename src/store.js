import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        topic: [{title:'title',content:'content',time:'2016-11-04'}]
    },
    mutations: {
        topicList:function(state, obj) {
            const list = {
                title: obj.title,
                content: obj.content,
                 time:obj.time
            }
             state.topic.push(list)
        }

    },
    actions: {
        topicList: function (text, obj) {
        text.commit('topicList', obj)
    }
}
})




