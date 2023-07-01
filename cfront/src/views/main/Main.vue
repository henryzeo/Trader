<script setup>
import vHeader from "@/components/Header.vue";
import vSidebar from "@/components/Sidebar.vue";

import { useSidebarStore } from "@/store/sidebar";

const sidebar = useSidebarStore();
</script>

<template>
  <vHeader />
  <vSidebar />

  <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
