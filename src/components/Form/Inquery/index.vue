<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" label-position="top">
      <el-form-item
        v-for="item in formData"
        :key="item.label"
        :label="item.label"
      >
        <el-input
          v-if="item.type === 'input'"
          :placeholder="'请输入' + item.label"
          v-model="form[item.model]"
        ></el-input>

        <el-date-picker
          v-if="item.type === 'date'"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
          style="width: 100%"
          v-model="form[item.model]"
        >
        </el-date-picker>

        <el-select
          v-if="item.type === 'select'"
          :placeholder="'请选择' + item.label"
          style="width: 100%"
          v-model="form[item.model]"
        >
          <el-option
            v-for="item in item.option"
            :key="item.value"
            :value="item.value"
          ></el-option>
        </el-select>

        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",
  props: {
    form: {
      type: Object,
    },
    formData: {
      type: Array,
    },
  },
  data() {
    return {
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>