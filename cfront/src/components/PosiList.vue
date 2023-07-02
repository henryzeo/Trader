<script setup>
import { ref, reactive } from "vue";
const balance = 10;
let tableData = [
  { code: "600025", name: "华能水电", count: 100, cost: 20 },
  { code: "600000", name: "浦发银行", count: 100, cost: 20 },
  { code: "000001", name: "平安银行", count: 100, cost: 20 },
  { code: "600886", name: "国投电力", count: 100, cost: 20 },
];

const dataCount = 4;
const pagination = reactive({
  curPage: ref(1),
  pageSize: 2,
});

const changeTableSort = (column) => {
  if (column.order == "descending") {
    tableData = tableData.sort((a, b) => b[column.prop] - a[column.prop]);
  } else {
    tableData = tableData.sort((a, b) => a[column.prop] - b[column.prop]);
  }
  // fix sort 无法正常显示问题
  const temp = pagination.curPage;
  pagination.curPage = 0;
  pagination.curPage = temp;
};
</script>

<template>
  <div class="posi-list">
    <!--可用资金-->
    <el-row>
      <el-col :span="5">可用资金：{{ balance }}</el-col>
    </el-row>
    <!--持仓列表-->
    <el-table
      :data="
        tableData.slice(
          (pagination.curPage - 1) * pagination.pageSize,
          pagination.curPage * pagination.pageSize
        )
      "
      style="width: 100%; margin-top: 10px"
      empty-text="暂无数据"
      border
      @sort-change="changeTableSort"
    >
      <el-table-column prop="code" label="代码" align="center" sortable />
      <el-table-column prop="name" label="名称" align="center" sortable />
      <el-table-column prop="count" label="股票数量" align="center" sortable />
      <el-table-column prop="cost" label="总投入" align="center" sortable />
      <el-table-column label="成本" align="center" sortable />
    </el-table>
    <!--分页空间 刷新按钮-->
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="dataCount"
        :page-size="pagination.pageSize"
        v-model:current-page="pagination.curPage"
      />
      <el-button
        round
        type="primary"
        style="margin: 2px 0 0 10px"
        icon="el-icon-refresh"
        >刷新</el-button
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.pagination {
  display: flex;
  float: right;
  padding: 10px;
}
</style>
