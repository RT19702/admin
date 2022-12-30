<template>
  <div class="site-aside">
    <el-menu class="el-menu-vertical-demo" :collapse="!isCollapse">
      <div class="images">
        <img :src="imgCollapse" alt="" v-show="!isCollapse" />
        <img :src="imgExpansion" alt="" v-show="isCollapse" />
      </div>
      <div class="menu">
        <div v-for="item in menu" :key="item.name">
          <!-- <h4 class="title">{{ item.name }}</h4> -->
          <el-menu-item
            :index="item1.title"
            v-for="item1 in item.children"
            :key="item1.title"
            @click="clickPath(item1)"
          >
            <i :class="item1.icon"></i>
            <span slot="title">{{ item1.title }}</span>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",

  data() {
    return {
      imgCollapse: require("@/assets/images/haixiaobao.png"),
      imgExpansion: require("@/assets/images/guanli.png"),
      menu: [
        {
          name: "Operation",
          children: [
            { icon: "el-icon-document-copy", title: "文章列表", path: "/articles" },
          ],
        },
        {
          name: "MENU",
          children: [
            { icon: "el-icon-user-solid", title: "个人信息", path: "/user" },
          ],
        },
        {
          name: "OTHER",
          children: [{ icon: "el-icon-question", title: "帮助" }],
        },
      ],
    };
  },
  methods: {
    clickPath(item) {
      this.$router.push(item.path);
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.site-aside {
  .el-menu {
    height: 100vh;
    background-color: #fff;
    box-shadow: 0 10px 40px rgb(0 0 0 / 40%);
  }
  .images {
    padding: 15px 0;
    text-align: center;
    img {
      height: 35px;
    }
  }
  .menu {
    .title {
      padding-left: 0.5rem;
      font-size: 0.6875rem;
      color: rgba(56, 78, 104, 0.54);
    }
  }
}
</style>