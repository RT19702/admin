<template>
  <div class="login-wrap">
    <el-row justify="center" type="flex" class="box">
      <el-col :lg="8" span="24">
        <el-card class="box-card">
          <h1 class="dom-mb-30">Console</h1>
          <el-form
            ref="formName"
            :model="form"
            :rules="rules"
            label-width="80px"
            label-position="top"
          >
            <el-form-item label="账号" prop="username">
              <el-input
                @keyup.enter.native="submitFrom('formName')"
                v-model="form.username"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                @keyup.enter.native="submitFrom('formName')"
                v-model="form.password"
              ></el-input>
            </el-form-item>
            <el-button
              plain
              native-type="submit"
              class="button"
              @click.prevent="submitFrom(form)"
              >登录</el-button
            >
          </el-form>
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
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  mounted() {},

  methods: {
    submitFrom(formName) {
      this.$refs["formName"].validate((valid) => {
        console.log(valid);
        if (valid) {
          console.log("验证成功");
        } else {
          console.log("验证失败");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-wrap {
  background: url("~@/assets/images/download.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .button {
    width: 100%;
    background: ;
  }
}
</style>