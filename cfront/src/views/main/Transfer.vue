<script setup>
import { ref } from "vue";
const transfer = {
  type: [
    { id: 1, name: "银行转证券（转入）" },
    { id: 2, name: "银行转证券（转出）" },
  ],
  bank: [
    { id: 1, name: "招商银行" },
    { id: 2, name: "建设银行" },
  ],
  password: "",
  moneyType: [
    { id: 1, name: "人民币 " },
    { id: 2, name: "美元 " },
  ],
  money: 0,
};
const curType = ref(1);
const curBank = ref(1);
const curMoneyType = ref(1);
</script>

<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <el-icon-creditcard
          style="margin-bottom: 4px; vertical-align: middle"
        />
        银证转账
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="hover" style="margin-top: 5px">
      <div class="_form">
        <el-form
          :label-position="labelPosition"
          label-width="450"
          style="max-width: 650px"
        >
          <el-form-item label="转账方式">
            <el-select v-model="curType">
              <el-option
                v-for="item in transfer.type"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择银行">
            <el-select v-model="curBank">
              <el-option
                v-for="item in transfer.bank"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行密码">
            <el-input :type="'password'" v-model="transfer.password" />
          </el-form-item>
          <el-form-item label="选择币种">
            <el-select v-model="curMoneyType">
              <el-option
                v-for="item in transfer.moneyType"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="金额">
            <el-input v-model="transfer.money" />
          </el-form-item>
        </el-form>
      </div>

      <el-row justify="center">
        <el-button
          style="display: relative; float: right"
          size="small"
          type="primary"
          >转账</el-button
        >
      </el-row>
    </el-card>
  </div>
</template>

<style lang="less" scoped></style>
