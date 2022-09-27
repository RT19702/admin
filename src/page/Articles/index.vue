<template>
  <div>
    <el-card>
      <search :searchTitle="title" :searchCategory="category" />
    </el-card>

    <tab
      class="table"
      :formLabel="formLabel"
      :tableData="listItem"
      @eventMessage="editTab"
    />

    <el-dialog
      :title="formType === 'add' ? '新增' : '编辑'"
      :visible.sync="isShow"
    >
      <inquery :formData="modalData" :form.sync="formOperate" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import search from "@/components/Form/Search";
import tab from "@/components/Form/Tab";
import inquery from "@/components/Form/Inquery";
import { mapState } from "vuex";
export default {
  name: "AdminIndex",
  components: {
    search,
    tab,
    inquery,
  },
  data() {
    return {
      title: "文章标题",
      category: "文章分类",
      isShow: false,
      formType: "add",
      // 编辑框
      formOperate: {
        title: "",
        class: "",
        createDate: "",
      },
      // 模态框
      modalData: [
        {
          model: "title",
          label: "文章标题",
          type: "input",
        },
        {
          model: "class",
          label: "文章分类",
          type: "select",
          option: [
            {
              value: "",
            },
          ],
        },
        {
          model: "createDate",
          label: "创建日期",
          type: "date",
        },
      ],
      // Tab表格
      formLabel: [
        {
          label: "ID",
          width: 180,
          type: "id",
        },
        {
          label: "文章标题",
          type: "title",
        },
        {
          label: "文章分类",
        },
        {
          label: "创建时间",
          type: "createDate",
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("article/listItem");
  },
  methods: {
    editTab(item) {
      this.isShow = true;
      this.formType = 'edit';
      this.formOperate.title = item.title;
      this.formOperate.createDate = item.createDate;
    },
    confirm(){
      
    }
  },
  computed: {
    ...mapState({
      listItem: (state) => state.article.listItem,
    }),
  },
};
</script>

<style lang="less" scoped>
.table {
  margin-top: 20px;
}
</style>