<template>
  <div id="app">
      home
      <a v-link="{name:'one',params:{id:0}}">aa</a>
      <a v-link="{path:'/home/two'}">bb</a>
      <router-view></router-view>
  </div>
</template>

<script>
    
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
