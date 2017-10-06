<template>
  <div class="sign-up">
    <div class="container">
      <h4>注册新用户</h4>
      <form class="form" action="" method="post">
        <input type="text" name="username" placeholder="用户名" value="">
        <input type="text" name="name" placeholder="姓名" value="">
        <input type="email" name="email" placeholder="Email" value="">
        <div class="form-group">
          <input type="checkbox" name="email-public" value=""> 公开 Email
        </div>
        <input type="password" name="password" placeholder="密码" value="">
        <input type="password" name="password-confirmed" placeholder="确认密码" value="">
        <!-- <div class="form-group">
          <input type="text" name="verification-code" placeholder="验证码" value="">
        </div> -->
        <div class="form-action">
          <input type="submit" class="btn btn-primary" value="提交注册信息">
          <router-link to="/sign_in" class="btn btn-secondary">登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign-up',
  data () {
    return {
      form: {
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmed: '',
        verification_code: ''
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
  .sign-up {
    max-width: 960px;
    height: 480px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      width: 520px;
      height: 460px;
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
        height: 400px;

        input[type=text], input[type=email], input[type=password] {
          height: 30px;
          padding: 3px 10px;
          border-radius: 5px;
        }
      }
    }
  }
</style>
