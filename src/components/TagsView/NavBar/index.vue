<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <img class="user" src="~@/assets/images/logo.png" alt="" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item @click.native="logout">退出系统</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { removeToken } from "@/utils/auth";
export default {
  name: "AdminIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    logout() {
      // 简单粗暴法 删除Cookie直接退出
      removeToken("Token");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  width: 35px;
  height: 35px;
}
</style>