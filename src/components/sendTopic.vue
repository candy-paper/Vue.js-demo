<template>
 <div id="app">
 <input class="title" type="text" placeholder="请输入帖子标题" v-model="title" />
 <textarea contenteditable="true" class="text" placeholder="请输入内容" v-model="content"></textarea>
 <button v-on:click="sendTopic" style="width:100px;lin-height:38px;margin-left:700px;" class="btn">发帖</button>
</div>
</template>
<script>
    export default {
    data() {
                return {
                        title: '',
                        content: ''

                }
            },
       methods:{
                sendTopic:function(){
                this.$store.dispatch('changeList',{
                title:this.title,
                content:this.content,
                time:new Date(Date.now()).toLocaleTimeString()
                });
                this.title='';
                this.content='';
                console.log(this.$store.state.topic);
                this.$router.push('/List')
                }
       }
    }

</script>
<style>
.title{height:30px;lin-height:30px;}
.text{height:200px;border-color: red;}
.text,.title{width:795px;display:block; margin-bottom:10px;border:none;outline:none},
#app button{width:100px;}
</style>









