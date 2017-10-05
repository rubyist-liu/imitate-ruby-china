<template>
  <header>
    <div class="container">
      <span class="nav-brand">
        <router-link to="/">
          <b>Ruby</b> China
        </router-link>
      </span>
      <ul class="menu">
        <li><router-link to="/topics">社区</router-link></li>
        <li><router-link to="/jobs">招聘</router-link></li>
        <li><router-link to="/wiki">维基</router-link></li>
        <li><router-link to="/sites">酷站</router-link></li>
      </ul>
      <div class="search">
        <form>
          <icon name="search" scale="0.8"></icon>
          <input type="text" name="search" placeholder="搜索本站内容"/>
        </form>
      </div>
      <div class="sign">
        <router-link to="/sign_up">注册</router-link>
        <router-link to="/sign_in">登录</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  header {
    background: white !important;
    .container {
      min-width: 960px;
      width: 1003px;
      height: 50px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      .nav-brand {
        b {
          color: red;
        }
      }
      .menu {
        flex-grow: 2;
        display: flex;
        justify-content: flex-start;
        li {
          box-sizing: border-box;
          width: 60px;
          text-align: center;
          padding: 12px;

          &:hover {
            border-bottom: 3px solid red;
            a {
              color: red !important;
            }
          }
        }
      }
      .search {
        margin-right: 20px;
        input {
          outline: none;
          border: none;
          &::placeholder {
            color: #e5e5e5;
          }
        }
      }
      .sign {
      }
    }
  }
</style>
