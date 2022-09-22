<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        :prop="item.type"
        v-for="item in formLabel"
        :key="item.label"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",
  props: {
    formLabel: {
      require: true,
    },
    tableData: {
      require: true,
      default: [],
    },
  },
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch;
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>