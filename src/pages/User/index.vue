<template>
  <div class="pageUser">
    <el-row :gutter="20">
      <el-col :xs="24" :lg="24">
        <el-card class="box-card">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",

  data() {
    return {
      value: new Date(),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less">
</style>