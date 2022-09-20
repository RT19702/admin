<template>
  <div>
    <el-form class="section-search" :inline="true" :model="formInline">

      <el-form-item v-show="searchTitle" class="search-input" :label="searchTitle">
        <el-input v-model="formInline.user" :placeholder="searchTitle"></el-input>
      </el-form-item>
      <el-form-item v-show="searchCategory" class="search-input" :label="searchCategory">
        <el-select v-model="formInline.region" :placeholder="searchCategory">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item class="search-input">
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",
  props: {
    searchTitle: {
      require: true,
      type: String,
    },
    searchCategory: {
      type: String,
    },
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.section-search {
  display: flex;
  align-items: center;
  .search-input {
    margin: 5px 10px;
  }
}
</style>