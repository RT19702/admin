<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div class="menu">
        <div v-for="item in menu" :key="item.name">
          <h4 class="title">{{ item.name }}</h4>
          <el-menu-item
            index="1"
            v-for="item1 in item.children"
            :key="item1.title"
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
      imgCollapse: require("@/assets/digood/haixiaobao.png"),
      imgExpansion: require("@/assets/digood/guanli.png"),
      isCollapse: true,
      menu: [
        {
          name: "MENU",
          children: [{ icon: "el-icon-user-solid", title: "个人信息" }],
        },
        {
          name: "OTHER",
          children: [{ icon: "el-icon-question", title: "帮助" }],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  height: 100vh;
}
.images {
  img {
    height: 35px;
  }
}
.menu {
  .title {
    padding-left: 1rem;
    font-size: 0.6875rem;
    color: rgba(56, 78, 104, 0.54);
  }
}
</style>