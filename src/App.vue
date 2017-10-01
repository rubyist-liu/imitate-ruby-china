<template>
  <div id="app">
    <div is="app-header"></div>
    <div class="container">
      <router-view></router-view>
    </div>
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
