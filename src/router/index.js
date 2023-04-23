import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageSeven from "../components/Pages/HomePageSeven";
import AboutPageOne from "../components/Pages/AboutPageOne";
import GalleryPage from "../components/Pages/GalleryPage";
import FaqPage from "../components/Pages/FaqPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", component: HomePageSeven },
  { path: "/about", component: AboutPageOne },
  { path: "/gallery", component: GalleryPage },
  { path: "/faq", component: FaqPage },
  { path: "/contact", component: ContactPage },
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
