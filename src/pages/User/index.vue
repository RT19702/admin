<template>
  <div class="pageUser">
    <el-row :gutter="20">
      <el-col :xs="24" :lg="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>关于我</span>
          </div>
          <div>
            <div class="d-flex align-items-center justify-content-center">
              <img src="~@/assets/images/logo.png" alt="" />
            </div>
            <div class="contact">
              <div class="dom-mb-10">
                <i class="dom-mr-10 el-icon-phone"></i>
                <a href="tel:+861371211710">1371211710</a>
              </div>
              <div class="dom-mb-10">
                <i class="dom-mr-10 el-icon-message"></i>
                <a href="mailto:981424537@qq.com">981424537@qq.com</a>
              </div>
              <div class="dom-mb-10">
                <i class="dom-mr-10 el-icon-school"></i>
                <span>东莞职业技术学院</span>
              </div>
            </div>
          </div>
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
      url:''
    };
  },

  mounted() {
    
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.pageUser {
  .contact {
    font-size: 16px;
    i {
      font-size: 18px;
    }
  }
}
.main {
  width: 100%;
  height: 200px;
}
</style>