<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span v-if="index == levelList.length - 1" class="current">{{
        item.meta.title
      }}</span>
      <router-link v-else :to="item.path">{{ item.meta.title }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "AdminIndex",

  data() {
    return {
      levelList: null,
    };
  },

  mounted() {},

  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      this.levelList = matched;
      console.log(matched);
    },
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
};
</script>

<style lang="less" scoped>
.current {
  color: #5f5f5f;
}
</style>