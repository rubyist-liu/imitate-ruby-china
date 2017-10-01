<template>
  <div class="header">
    <nav>
      <div class="navbar-header">
        <b>Ruby</b> China
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header {
    nav {
      .navbar-header {
        b {
          color: red;
        }
      }
    }
  }
</style>
