<script setup>
import { ref } from "vue";

const value = ref("");

const tableData = [];

const dataCount = 0;
const pageCount = dataCount ? Math.ceil(dataCount / 10) : 1;
</script>

<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <el-icon-creditcard
          style="margin-bottom: 4px; vertical-align: middle"
        />
        转账查询
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="hover" style="margin-top: 5px">
      <div class="top">
        <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
        <el-button style="margin: 0 5px 5px 5px" type="primary">查询</el-button>
      </div>
      <div class="middle">
        <el-table
          :data="tableData"
          style="width: 100%; margin-top: 10px"
          empty-text="暂无数据"
          border
        >
          <el-table-column prop="date" label="日期" />
          <el-table-column prop="time" label="时间" />
          <el-table-column prop="type" label="业务类别" />
          <el-table-column prop="moneyType" label="币种" />
          <el-table-column prop="money" label="金额" />
        </el-table>
      </div>
      <div class="bottom">
        <div style="align-items: center; margin: 4px 10px 0 0">
          共 {{ dataCount }} 条
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="dataCount"
          :page-count="pageCount"
        />
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.bottom {
  display: flex;
  float: right;
  padding: 10px;
}
</style>
