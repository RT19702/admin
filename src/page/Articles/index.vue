<template>
  <div>
    <el-card>
      <search :searchTitle="title" :searchCategory="category" />
    </el-card>
    <el-card class="table">
      <tab :formLabel="formLabel" :tableData="listItem" />
    </el-card>
  </div>
</template>

<script>
import search from "@/components/Form/Search";
import tab from "@/components/Form/Tab";
import { mapState } from "vuex";
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
      formLabel: [
        {
          label: "ID",
          width: 180,
          type: "id",
        },
        {
          label: "文章标题",
          type: "title",
        },
        {
          label: "文章分类",
        },
        {
          label: "创建时间",
          type: "date",
        },
      ],
    };
  },

  mounted() {
    this.$store.dispatch("article/listItem");
  },

  methods: {},

  computed: {
    ...mapState({
      listItem: (state) => state.article.listItem,
    }),
  },
};
</script>

<style lang="less" scoped>
.table {
  margin-top: 20px;
}
</style>