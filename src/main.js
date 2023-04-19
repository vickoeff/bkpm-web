import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import InitAxios from '../api';

import "./assets/custom.scss";

InitAxios();
const app = createApp(App).use(router);
app.use(AOS.init()).mount("#app");
