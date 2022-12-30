<template>
  <el-container>
    <el-aside width="auto">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <!-- <router-view></router-view> -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
export default {
  name: "AdminMain",

  components: {
    Aside,
    Header
  },

  data() {
    return {};
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="less" scoped>

</style>