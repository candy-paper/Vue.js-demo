<template>
 <div id="app">
    <ul>
        <li v-for="(item,index) in list" v-on:click="detail(index,item)">
          {{item.title}}
           {{item.content}}
           {{item.time}}
        </li>
    </ul>
 </div>
</template>
<script>
 export default{
    data(){
    return{
       list: this.$store.state.topic
    }
    },
     methods:{
         detail(index,item){
         console.log(this.$store.state.topic);
          this.$router.push('/detail/'+index);
         }
     }
 }
</script>
<style>
    li{list-style:none}
    .content{margin-left:15px;}
</style>















