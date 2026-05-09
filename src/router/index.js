import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BirthdayCampaignView from "@/views/BirthdayCampaignView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/birthday-campaign",
    name: "BirthdayCampaign",
    component: BirthdayCampaignView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // Hvis der er et hash (#sektion)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // Hvis browseren husker scroll-position
    if (savedPosition) {
      return savedPosition;
    }

    // Default: scroll til top
    return { top: 0 };
  },
});

export default router;
