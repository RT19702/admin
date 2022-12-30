<template>
  <div class="site-head">
    <div class="navigation">
      <div class="icon" @click="fold">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </div>
      <Breadcrumb />
    </div>
    <div class="information">
      <el-dropdown trigger="click" @command="handleSetLanguage">
        <div class="lang el-dropdown-link">
          <img src="~@/assets/images/language.png" alt="" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :disabled="language === 'zh'" command="zh">中文</el-dropdown-item>
          <el-dropdown-item :disabled="language === 'en'" command="en">英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <Navbar />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/TagsView/Breadcrumb";
import Navbar from "@/components/TagsView/NavBar";
export default {
  name: "AdminIndex",
  components: {
    Breadcrumb,
    Navbar
  },
  data() {
    return {};
  },
  mounted() { },
  methods: {
    fold() {
      this.$store.commit("app/fold");
    },
    handleSetLanguage(lang) {
      this.$store.commit("app/SET_LANGUAGE", lang)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.isCollapse;
    },
    language() {
      return this.$store.getters.language
    }
  },
};
</script>

<style lang="less" scoped>
.site-head {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid #ccc;

  .navigation {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 30px;
    margin-right: 15px;
    cursor: pointer;
  }

  .information {
    display: flex;

    .lang {
      margin-right: 15px;
    }

    .lang img {
      width: 35px;
      height: 35px;
    }
  }
}
</style>