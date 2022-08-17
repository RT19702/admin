<template>
  <el-container>
    <el-aside width="auto">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
export default {
  name: "AdminMain",

  components: {
    Aside,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>