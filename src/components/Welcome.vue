<template>
  <div class="welcome">
    <img src="/static/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><router-link to="/login" class="el-button el-button--primary">登录</router-link></li>
      <li><router-link to="/register" class="el-button el-button--default">注册</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
}

.el-row {
  padding: 0.5em 0;
}
</style>
