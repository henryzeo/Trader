import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "@/utils";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component);
}
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
