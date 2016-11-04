<template>
 <div id="app">
<h4>{{list[index].title}}</h4>
<p>{{list[index].time}}</p>
<h4>{{list[index].content}}</h4>
</div>
</template>
<script>
 export default{
    data(){
    return{
       list: this.$store.state.topic,
       index: this.$route.params.id
        }
    }

 }
</script>