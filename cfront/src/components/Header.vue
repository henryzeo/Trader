<script setup>
import { ref } from "vue";
import { useSidebarStore } from "@/store/sidebar";

const username = ref("hzeo");
const sidebar = useSidebarStore();
</script>

<template>
  <div class="header">
    <div class="collapse-btn" @click="sidebar.handleCollapse()">
      <el-icon style="vertical-align: middle; margin-bottom: 4px" :size="24">
        <el-icon-fold v-if="sidebar.collapse"></el-icon-fold>
        <el-icon-expand v-else> </el-icon-expand>
      </el-icon>
    </div>

    <div class="logo">证券交易系统</div>

    <div class="header-right">
      <div class="header-user-con">
        <el-dropdown class="user-name" trigger="click">
          <span class="el-dropdown-link">
            {{ username }}
            <el-icon style="vertical-align: middle; margin-bottom: 2px"
              ><CaretBottom
            /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}

.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}

.header-right {
  float: right;
  padding-right: 50px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
