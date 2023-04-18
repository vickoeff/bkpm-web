import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/custom.scss";

const app = createApp(App).use(router);
app.use(AOS.init()).mount("#app");
