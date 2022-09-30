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

        <el-upload
          v-if="item.type === 'upload'"
          class="avatar-uploader image__lazy"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="form[item.model]"
            :src="form[item.model]"
            :class="form[item.model] ? '' : 'avatar'"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

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
      imageUrl: "",
    };
  },

  mounted() {},

  methods: {
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log(file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid #ccc;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>