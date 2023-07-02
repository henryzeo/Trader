<script setup>
import PosiList from "@/components/PosiList.vue";
</script>

<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <el-icon-piechart style="margin-bottom: 4px; vertical-align: middle" />
        资金股份
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="container" shadow="hover" style="margin-top: 5px">
      <posi-list></posi-list>
    </el-card>
  </div>
</template>

<style lang="less" scoped></style>
