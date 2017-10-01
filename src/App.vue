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
#app {
  .container {
    background-color: #e5e5e5;
  }
}
</style>
