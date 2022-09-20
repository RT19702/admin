<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID"> </el-table-column>
      
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
  props:["id"],
  data() {
    return {
      tableData: [
        
      ],
    };
  },

  mounted() {
    this.$store.dispatch
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>