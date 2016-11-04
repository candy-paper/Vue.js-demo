<template>
 <div id="app">
 <ul>
  <li v-for="(item,index) in list" v-on:click="detail(item,index)">
          {{ item.title}}
          {{item.content}}
          {{item.time}}
          {{index}}
   </li>
 </ul>
</template>
<script>
 export default{
    data(){
    return{
       list: this.$store.state.topic
    }
    },
    methods:{
             detail:function(item,index){
        this.$router.push('/detail/'+index)

        }
    }

 }
</script>
<style>
li{list-style:none}
.content{margin-left:15px;}
</style>














