<template>
  <div class="sign-up">
    <div class="container">
      <h4>注册新用户</h4>
      <form class="form" v-on:submit.prevent>
        <input type="text" v-model="form.username" placeholder="用户名">
        <input type="text" v-model="form.name" placeholder="姓名">
        <input type="email" v-model="form.email" placeholder="Email">
        <div class="form-group">
          <input type="checkbox" id="is_email_public" v-model="form.is_email_public">
          <label for="is_email_public"> 公开 Email</label>
        </div>
        <input type="password" v-model="form.password" placeholder="密码">
        <input type="password" v-model="form.password_confirmed" placeholder="确认密码">

        <div class="form-action">
          <input type="submit" @click="submitForm" class="btn btn-primary" value="提交注册信息">
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
      this.axios.post('/users', { user: this.form }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
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
