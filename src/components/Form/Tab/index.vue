<template>
  <div>
    <el-table
      max-height="720"
      :data="tableData"
      border
      stripe
      style="width: 100%"
    >
      <el-table-column type="selection" width="50"></el-table-column>

      <el-table-column
        :prop="item.type"
        v-for="item in formLabel"
        :key="item.label"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>

      <el-table-column label="图片" prop="imageUrl">
        <template slot-scope="scope">
          <el-image :src="scope.row.imageUrl" :preview-src-list="[scope.row.imageUrl]" alt="" />
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small"
            >编辑</el-button
          >
          <el-button type="danger" size="small">删除</el-button>
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
  mounted() {
    this.$store.dispatch;
    console.log(this.tableData);
    console.log(this.formLabel);
  },
  methods: {
    handleClick(item) {
      this.$emit("eventMessage", item);
    },
  },
};
</script>

<style lang="less" scoped></style>
