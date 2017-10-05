<template>
  <div id="app">
    <div is="app-header"></div>
    <router-view></router-view>
    <div is="app-footer"></div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
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
