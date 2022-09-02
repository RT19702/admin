<template>
  <div class="site-head">
    <div class="d-flex align-items-center">
      <div class="icon" @click="fold">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="information">
      <el-dropdown>
        <div class="lang el-dropdown-link">
          <img src="~@/assets/images/language.png" alt="" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="~@/assets/images/logo.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    fold() {
      this.$store.commit("fold");
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.site-head {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .icon {
    font-size: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
  .information {
    display: flex;
    .lang {
      margin-right: 15px;
    }
    .lang img,
    .user {
      width: 35px;
      height: 35px;
    }
  }
}
</style>