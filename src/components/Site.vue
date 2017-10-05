<template>
  <div class="sites">
    <div class="group">
      <header>国内商业网站</header>
      <div class="container">
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
      </div>
    </div>
    <div class="group">
      <header>国外著名网站</header>
      <div class="container">
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
        <div class="site">
          <img src="../assets/images/logo.png" alt="site-logo" width="16">
          <span>Ruby China</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sites'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sites {
    max-width: 960px;
    margin: 20px auto;

    .group {
      border-radius: 5px;
      margin-bottom: 20px;
      background-color: white;
      header {
        background: #fafafa;
        padding: 6px 15px;
        border-bottom-color: #eee;
        border-radius: 5px 0;
        color: #777;
      }

      .container {
        padding: 10px 10px 20px 10px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
        grid-row: 4;

      }

    }

  }
</style>
