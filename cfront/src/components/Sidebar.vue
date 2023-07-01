<script setup>
import { toLine } from "@/utils";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useSidebarStore } from "@/store/sidebar";

const route = useRoute();
const sidebar = useSidebarStore();

const onRoute = computed(() => {
  return route.path.replace("/", "");
});

const items = [
  {
    icon: "el-icon-piechart",
    index: "dashboard",
    title: "资金股份",
  },
  {
    icon: "el-icon-soldout",
    index: "buy",
    title: "买入",
  },
  {
    icon: "el-icon-sell",
    index: "sell",
    title: "卖出",
  },
  {
    icon: "el-icon-search",
    index: "3",
    title: "查询",
    subs: [
      {
        index: "orderquery",
        title: "当日委托",
      },
      {
        index: "tradequery",
        title: "当日成交",
      },
      {
        index: "hisorderquery",
        title: "历史委托",
      },
      {
        index: "histradequery",
        title: "历史成交",
      },
    ],
  },

  {
    icon: "el-icon-creditcard",
    index: "4",
    title: "银证业务",
    subs: [
      {
        index: "transfer",
        title: "银证转账",
      },
      {
        index: "transferquery",
        title: "转账查询",
      },
    ],
  },
  {
    icon: "el-icon-setting",
    index: "pwdsetting",
    title: "修改密码",
  },
];
</script>

<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoute"
      class="el-menu-vertical-demo"
      :collapse="sidebar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items" :key="item.index">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index">
            <template #title>
              <component
                class="sidebar-icon"
                v-if="item.icon"
                :is="`${toLine(item.icon)}`"
              ></component>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs" :index="subItem.index">
              <el-menu-item :index="subItem.index">{{
                subItem.title
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <component
              class="sidebar-icon"
              v-if="item.icon"
              :is="`${toLine(item.icon)}`"
            ></component>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;

  .sidebar-icon {
    margin: 0 5px 1px;
  }

  .el-menu-item {
    min-width: 80px;
  }

  li {
    text-align: left;
    .el-tooltip {
      width: auto !important;
    }
  }

  /*下拉导航菜单多出1px*/
  .el-menu {
    border-right-width: 0;
  }

  .el-menu--collapse {
    width: auto !important;
  }
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.sidebar > ul {
  height: 100%;
}
</style>
