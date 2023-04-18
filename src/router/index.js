import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageOne from "../components/Pages/HomePageOne";
import HomePageTwo from "../components/Pages/HomePageTwo";
import HomePageThree from "../components/Pages/HomePageThree";
import HomePageFour from "../components/Pages/HomePageFour";
import HomePageFive from "../components/Pages/HomePageFive";
import HomePageSix from "../components/Pages/HomePageSix";
import HomePageSeven from "../components/Pages/HomePageSeven";
import HomePageEight from "../components/Pages/HomePageEight";
import HomePageNine from "../components/Pages/HomePageNine";
import AboutPageOne from "../components/Pages/AboutPageOne";
import AboutPageTwo from "../components/Pages/AboutPageTwo";
import FeaturesPageOne from "../components/Pages/FeaturesPageOne";
import FeaturesPageTwo from "../components/Pages/FeaturesPageTwo";
import TeamPageOne from "../components/Pages/TeamPageOne";
import TeamPageTwo from "../components/Pages/TeamPageTwo";
import HowItWorksPage from "../components/Pages/HowItWorksPage";
import GalleryPage from "../components/Pages/GalleryPage";
import ServicesPage from "../components/Pages/ServicesPage";
import PricingPage from "../components/Pages/PricingPage";
import FeedbackPage from "../components/Pages/FeedbackPage";
import SignInPage from "../components/Pages/SignInPage";
import SignUpPage from "../components/Pages/SignUpPage";
import ForgetPasswordPage from "../components/Pages/ForgetPasswordPage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import TermsConditionsPage from "../components/Pages/TermsConditionsPage";
import ScreenshotsPage from "../components/Pages/ScreenshotsPage";
import FaqPage from "../components/Pages/FaqPage";
import ComingSoonPage from "../components/Pages/ComingSoonPage";
import ErrorPage from "../components/Pages/ErrorPage";
import AppDownloadPage from "../components/Pages/AppDownloadPage";
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogPageTwo from "../components/Pages/BlogPageTwo";
import BlogPageThree from "../components/Pages/BlogPageThree";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", component: HomePageOne },
  { path: "/home-two", component: HomePageTwo },
  { path: "/home-three", component: HomePageThree },
  { path: "/home-four", component: HomePageFour },
  { path: "/home-five", component: HomePageFive },
  { path: "/home-six", component: HomePageSix },
  { path: "/home-seven", component: HomePageSeven },
  { path: "/home-eight", component: HomePageEight },
  { path: "/home-nine", component: HomePageNine },
  { path: "/about-simple", component: AboutPageOne },
  { path: "/about-modern", component: AboutPageTwo },
  { path: "/features-one", component: FeaturesPageOne },
  { path: "/features-two", component: FeaturesPageTwo },
  { path: "/team-one", component: TeamPageOne },
  { path: "/team-two", component: TeamPageTwo },
  { path: "/how-it-works", component: HowItWorksPage },
  { path: "/gallery", component: GalleryPage },
  { path: "/services", component: ServicesPage },
  { path: "/pricing", component: PricingPage },
  { path: "/feedback", component: FeedbackPage },
  { path: "/sign-in", component: SignInPage },
  { path: "/sign-up", component: SignUpPage },
  { path: "/forget-password", component: ForgetPasswordPage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/terms-conditions", component: TermsConditionsPage },
  { path: "/screenshots", component: ScreenshotsPage },
  { path: "/faq", component: FaqPage },
  { path: "/coming-soon", component: ComingSoonPage },
  { path: "/error", component: ErrorPage },
  { path: "/app-download", component: AppDownloadPage },
  { path: "/blog-grid", component: BlogPageOne },
  { path: "/blog-right-sidebar", component: BlogPageTwo },
  { path: "/blog-left-sidebar", component: BlogPageThree },
  { path: "/blog-details", component: BlogDetailsPage },
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
