import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BirthdayCampaignView from "@/views/BirthdayCampaignView.vue";

// Admin Views
import AdminDashboardView from "@/views/AdminDashboardView.vue";
import AdminEmployeesView from "@/views/AdminEmployeesView.vue";
import AdminLeadsView from "@/views/AdminLeadsView.vue";
import StatisticsView from "@/views/StatisticsView.vue";
import TutorialsView from "@/views/TutorialsView.vue";

const routes = [
  // FRONTEND
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

  // ADMIN
  {
    path: "/dashboard",
    name: "AdminDashboard",
    component: AdminDashboardView,
  },
  {
    path: "/admin-employees",
    name: "AdminEmployees",
    component: AdminEmployeesView,
  },
  {
    path: "/admin-leads",
    name: "AdminLeads",
    component: AdminLeadsView,
  },
  {
    path: "/statistik",
    name: "Statistics",
    component: StatisticsView,
  },
  {
    path: "/tutorials",
    name: "Tutorials",
    component: TutorialsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});

export default router;
