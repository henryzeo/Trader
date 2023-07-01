<script setup>
import { reactive } from "vue";
const ruleForm = reactive({
  oldpass: "",
  newpass: "",
  checkPass: "",
});
</script>

<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <el-icon-setting style="margin-bottom: 4px; vertical-align: middle" />
        修改密码
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="hover" style="margin-top: 5px">
      <el-row justify="center">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="80px"
        >
          <el-form-item label="旧密码" prop="oldpass">
            <el-input
              v-model="ruleForm.oldpass"
              type="password"
              autocomplete="off"
              show-password
            />
          </el-form-item>
          <el-form-item label="新密码" prop="newpass">
            <el-input
              v-model="ruleForm.newpass"
              type="password"
              autocomplete="off"
              show-password
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="submitForm(ruleForm)"
              >确认修改</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="less" scoped></style>
