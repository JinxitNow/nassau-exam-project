<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'AdminSidebar',
  components: { RouterLink }
}
</script>

<template>
  <aside class="admin-sidebar">
    <nav>
      <ul>
        <li>
          <RouterLink to="/dashboard">
            <img src="/icons/dashboard.svg" alt="Dashboard" class="icon" />
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admin-employees">
            <img src="/icons/employees.svg" alt="Medlemsliste" class="icon" />
            Medarbejdere
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admin-leads">
            <img src="/icons/inbound.svg" alt="Events" class="icon" />
            Henvendelser
          </RouterLink>
        </li>
        <li>
          <!-- Denne route findes ikke endnu – lav evt. Statistics.vue -->
          <RouterLink to="/statistik">
            <img src="/icons/statistics.svg" alt="Statistikker" class="icon" />
            Statistikker
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
/* Sidebar styles (desktop/tablet) */
.admin-sidebar {
  position: fixed;
  top: 150px;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: var(--color-primary);
  padding-left: 3.8rem;
  padding-top: 3rem;
  padding-right: 1rem;
  z-index: 1000;
  border-radius: 0 16px 0px 0;
}

/* Mobil: skjul sidebar helt */
@media (max-width: 768px) {
  .admin-sidebar {
    display: none;
  }

  .main-content {
    margin-left: 0;
    padding-left: 1rem;
  }
}

.admin-sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.admin-sidebar nav ul li {
  margin-bottom: 1.2rem;
}

.admin-sidebar nav ul li a {
  text-decoration: none;
  color: var(--color-white);
  font-weight: 300;
  display: block;
  transition: color 0.2s ease;
}

.admin-sidebar nav ul li a:hover {
 transform: translateY(-2px);}

.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -2px;
}
</style>
