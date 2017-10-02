<template>
  <div id="app">
    <div is="app-header"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Regular, sans-serif;
}
#app {
  background-color: #e5e5e5;
  a {
    text-decoration: none;
    color: black;
  }
  ul {
    list-style-type: none;
  }
}
</style>
