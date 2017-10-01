<template>
  <div class="sign-up">
    <el-row>
      <el-col :span="8" :offset="2">
        <el-form ref="form" :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="名字">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.password_confirmed"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.verification_code"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交注册信息</el-button>
            <el-button>
              <router-link to="/sign_in">登录</router-link>
            </el-button>
          </el-form-item>
      </el-form>
    </el-col>
    </el-row>
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
<style scoped>
</style>
