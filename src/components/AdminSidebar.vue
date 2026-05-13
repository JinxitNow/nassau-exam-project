<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside class="admin-sidebar">
    <nav>
      <ul>

        <li>
          <RouterLink to="/dashboard">
            <img src="/icons/placeholder.svg" alt="Dashboard" class="icon" />
            Dashboard
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/admin-employees">
            <img src="/icons/placeholder.svg" alt="Medarbejdere" class="icon" />
            Medarbejdere
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/admin-leads">
            <img src="/icons/placeholder.svg" alt="Kundehenvendelser" class="icon" />
            Kundehenvendelser
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/statistik">
            <img src="/icons/placeholder.svg" alt="Statistik" class="icon" />
            Statistik
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/tutorials">
            <img src="/icons/placeholder.svg" alt="Manual" class="icon" />
            Manual & Tutorials
          </RouterLink>
        </li>

      </ul>
    </nav>
  </aside>
</template>

<style scoped>
/* SIDEBAR */
.admin-sidebar {
  position: fixed;
  top: 160px;
  left: 0;
  bottom: 0;
  width: 240px;

  background-color: var(--color-neutral-light);
  padding-left: 3.8rem;
  padding-top: 3rem;
  padding-right: 1rem;

  border-radius: 0 16px 16px 0;
  box-shadow: 2px 0 6px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* MOBILE: hide sidebar */
@media (max-width: 768px) {
  .admin-sidebar {
    display: none;
  }
}

/* NAVIGATION */
.admin-sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.admin-sidebar nav ul li {
  margin-bottom: 1.4rem;
}

.admin-sidebar nav ul li a {
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s ease;
  text-transform: uppercase;
}

.admin-sidebar nav ul li a:hover {
  opacity: 0.7;
}

/* ICONS */
.icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}
</style>
