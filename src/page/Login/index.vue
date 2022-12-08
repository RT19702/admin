<template>
  <div class="login-wrap">
    <el-row justify="center" type="flex" class="box">
      <el-col :lg="8" :span="24">
        <el-card class="box-card">
          <div class="images">
            <img class="" src="~@/assets/images/guanli.png" alt="" />
          </div>
          <el-form ref="loginForm" :model="formData" :rules="rules" label-width="80px" label-position="top">
            <el-form-item label="账号" prop="username">
              <el-input @keyup.enter.native="submitFrom('formData')" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input @keyup.enter.native="submitFrom('formData')" v-model="formData.password"></el-input>
            </el-form-item>
            <el-button :loading="loading" plain native-type="submit" class="button"
              @click.prevent="submitFrom(formData)">登录</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入验证规则
import { validUsername } from "@/utils/validate";
export default {
  name: "AdminIndex",
  data() {
    // 验证用户名规则
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      formData: {
        username: "admin",
        password: "123",
      },
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername,
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  mounted() { },

  methods: {
    submitFrom(formData) {
      console.log(formData);
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$message.success("验证成功");
          this.$store
            .dispatch("user/login", this.formData)
            .then(() => {
              this.loading = false;
              this.$router.push("/").catch((error) => console.log(error));
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          this.$message.error("用户名或密码错误");
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
  display: flex;
  align-items: center;
  justify-items: center;

  .images {
    text-align: center;

    img {
      width: 120px;
    }
  }

  .box {
    width: 100%;
  }

  .button {
    width: 100%;
  }
}
</style>