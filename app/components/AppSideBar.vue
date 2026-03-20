

<script setup lang="ts">
</script>

<script setup lang="ts">
</script>

<template>
  <nav class="sidebar">
    <h2 class="logo">Mi Portafolio</h2>

    <ul class="menu">
      <li>
        <NuxtLink to="/" class="link">Perfil</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">Sobre mí</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="link">Contáctame</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Proyectos</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: #020617;
  padding: 20px;
  border-right: 1px solid #1e293b;
}

/* Título */
.logo {
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
}

/* Menú */
.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 15px 0;
}

/* Links */
.link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;
}

.link:hover {
  color: #60a5fa;
}
</style>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: #020617;
  padding: 20px;
  border-right: 1px solid #1e293b;
}

.logo {
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 15px 0;
}

.link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
}

.link:hover {
  color: #60a5fa;
}
</style>