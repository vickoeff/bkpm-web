import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageSeven from "../components/Pages/HomePageSeven";
import AboutPageOne from "../components/Pages/AboutPageOne";
import GalleryPage from "../components/Pages/GalleryPage";
import AgendaPage from "../components/Pages/AgendaPage";
import PanduanPage from "../components/Pages/PanduanPage";
import FaqPage from "../components/Pages/FaqPage";

const routes = [
  { path: "/", component: HomePageSeven },
  { path: "/about", component: AboutPageOne },
  { path: "/gallery", component: GalleryPage },
  { path: "/agenda", component: AgendaPage},
  { path: "/panduan", component: PanduanPage},
  { path: "/faq", component: FaqPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
