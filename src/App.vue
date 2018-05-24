<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/update" class="update-check">检查更新</router-link>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #app .update-check {
    font-size: 12px;
    color: #888;
  }
</style>
