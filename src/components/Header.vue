<template>
  <el-row :gutter="10" class="header container-fluid">
    <el-col :offset="3" class="navbar-brand" :span="1">
      <b>Ruby</b> China
    </el-col>
    <el-col :span="4">
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          <router-link to="/topics">社区</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/jobs">招聘</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/wiki">维基</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/sites">酷站</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :offset="5" :span="2">
      <el-input
        placeholder="搜索本站内容"
        icon="search">
      </el-input>
    </el-col>
    <el-col :span="4">
      <el-button>
        <router-link to="/sign_up">注册</router-link>
      </el-button>
      <el-button>
        <router-link to="/sign_in">登录</router-link>
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header {
  height: 60px;
  line-height: 60px;
    .navbar-brand {
      b {
        color: red;
      }
    }
    .el-menu {
      background-color: white;
    }
  }
</style>
