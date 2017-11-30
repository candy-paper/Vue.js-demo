<template>
  <div id="app">
    <router-link to="/List">首页</router-link>
    <router-link to="/sendTopic">发帖</router-link>
   
    <router-view></router-view>
   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
   #app{width:800px;margin: 0 auto;border:1px solid black }
   a{width:350px;line-height: 45px; display: inline-block;text-align: center}
   #app a.active{color:red;}
</style>
