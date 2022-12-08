<template>
  <div>
    <el-card>
      <search :searchTitle="searchTitle" :searchCategory="searchCategory" />
    </el-card>

    <tab class="table" :cloumns="cloumns" :tableData="listItem" @editorMsg="editorMsg" @delMsg="delMsg"
      :loading="loading" />

    <el-dialog :title="formType === 'add' ? '新增' : '编辑'" :visible.sync="isShow">
      <inquery :modalData="modalData" :form.sync="formOperate" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import search from "@/components/Form/Search";
import tab from "@/components/Form/Tab";
import inquery from "@/components/Form/Inquery";
import { delList, listData } from "@/api";
export default {
  name: "AdminIndex",
  components: {
    search,
    tab,
    inquery,
  },
  data() {
    return {
      searchTitle: '文章标题',
      searchCategory: '文章分类',
      formType: 'add',
      isShow: false,
      loading: true,
      // Table 标题
      cloumns: [
        { label: "ID", width: 100, type: "id", },
        { label: "文章标题", type: "title", },
        { label: "文章分类", },
      ],
      // Dialog 编辑框
      formOperate: { title: "", class: "", createDate: "", imageUrl: "" },
      // Dialog 模态框
      modalData: [
        { model: "title", label: "文章标题", type: "input", },
        { model: "class", label: "文章分类", type: "select", option: [{ value: "", },], },
        { model: "imageUrl", type: "upload", label: "文章图片", },
        { model: "createDate", label: "创建日期", type: "date", },
      ],
      listItem: [] //文章数据
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    editorMsg(item) {
      this.isShow = true;
      this.formType = 'edit';
      this.formOperate.title = item.title;
      this.formOperate.createDate = item.createDate;
      this.formOperate.imageUrl = item.imageUrl
    },
    async delMsg(item) {
      const { list: res } = await delList(item)
      this.listItem = res
    },
    async getList() {
      const { data: res } = await listData()
      this.listItem = res
      this.loading = false
    }
  },
  computed: {
  },
};
</script>

<style lang="less" scoped>
.table {
  margin-top: 20px;
}
</style>