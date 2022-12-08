<template>
  <div>
    <el-table max-height="720" :data="tableData" border stripe style="width: 100%" v-loading="loading">
      <el-table-column align="center" type="selection" width="50"></el-table-column>

      <el-table-column align="center" :prop="item.type" v-for="item in cloumns" :key="item.label" :label="item.label"
        :width="item.width">
      </el-table-column>

      <el-table-column label="图片" prop="imageUrl">
        <template slot-scope="scope">
          <el-image :src="scope.row.imageUrl" :preview-src-list="[scope.row.imageUrl]" alt="" />
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="200">
        <template v-slot="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button @click="delClick(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",
  props: {
    cloumns: {
      require: true,
    },
    tableData: {
      require: true,
      default: [],
    },
    loading: {
      require: true,
    }
  },
  mounted() {
    this.$store.dispatch;
  },
  methods: {
    handleClick(item) {
      this.$emit("editorMsg", item);
    },
    delClick(item) {
      this.$emit("delMsg", item);
    }
  },
};
</script>

<style lang="less" scoped>

</style>
