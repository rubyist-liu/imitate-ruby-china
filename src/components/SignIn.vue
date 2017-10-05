<template>
  <div class="sign-in">
    <div class="container">
      <h4>登录</h4>
      <form class="form" action="" method="post">
        <input type="text" name="username" placeholder="用户名" value="">
        <input type="password" name="password" placeholder="密码" value="">
        <div class="form-group">
          <input type="checkbox" name="remember_me" value=""> 记住登录状态 60 天
        </div>
        <input type="submit" value="登录">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      form: {
      }
    }
  },
  methods: {
    submitForm () {
      console.log('submit ...')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sign-in {
    max-width: 960px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      width: 520px;
      height: 260px;
      background-color: white;
      h4 {
        margin: 0 0 10px 0;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;
      }
      .form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4px 20px;
        height: 200px;

        input[type=text], input[type=password] {
          height: 30px;
        }

        input[type=submit] {
          background-color: rgb(53, 109, 208);
          border: none;
          border-radius: 3px;
          padding: 4px 5px;
          color: white;
        }
      }
    }
  }
</style>
