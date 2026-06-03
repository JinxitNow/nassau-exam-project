import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BirthdayCampaignView from "@/views/BirthdayCampaignView.vue";

// Admin Views
import AdminDashboardView from "@/views/AdminDashboardView.vue";
import AdminEmployeesView from "@/views/AdminEmployeesView.vue";
import AdminLeadsView from "@/views/AdminLeadsView.vue";
import StatisticsView from "@/views/StatisticsView.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
