<template>
  <div class="sign-in">
    <el-row>
      <el-col :span="8" :offset="2">
        <el-form :model="form" ref="form">
          <el-form-item label="用户名/邮箱">
            <el-input type="login" v-model="form.login" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="记住登录状态" prop="delivery">
            <el-switch on-text="" off-text="" v-model="form.remember_me"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      form: {
        login: '',
        password: '',
        remember_me: false
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
<style scoped>
</style>
