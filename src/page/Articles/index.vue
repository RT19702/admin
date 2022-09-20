<template>
  <div>
    <el-card>
      <search :searchTitle="title" :searchCategory="category" />
    </el-card>
    <el-card class="table">
      <tab/>
    </el-card>
  </div>
</template>

<script>
import search from "@/components/Form/Search";
import tab from "@/components/Form/Tab";
export default {
  name: "AdminIndex",
  components: {
    search,
    tab,
  },
  data() {
    return {
      title: "文章标题",
      category: "文章分类",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
  .table{
    margin-top: 20px;
  }
</style>