<script setup lang="ts">
import { ref } from 'vue'

const abierto = ref(true)
</script>

<template>
  <div class="layout">

    <!-- SIDEBAR -->
    <nav class="sidebar">
      
      <!-- BOTÓN -->
      <button class="logo-btn" @click="abierto = !abierto">
        <span>Mi Portafolio</span>
        <span>{{ abierto ? '−' : '+' }}</span>
      </button>

      <!-- MENÚ -->
      <ul v-if="abierto" class="menu">
        <li><NuxtLink to="/" class="link">Perfil</NuxtLink></li>
        <li><NuxtLink to="/about" class="link">Sobre mí</NuxtLink></li>
        <li><NuxtLink to="/contact" class="link">Contáctame</NuxtLink></li>
        <li><NuxtLink to="/projects" class="link">Proyectos</NuxtLink></li>
      </ul>

    </nav>

    <!-- 🔥 CONTENIDO DINÁMICO (ESTO FALTABA) -->
    <main class="content">
      <slot />
    </main>

  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

/* SIDEBAR */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: #020617;
  padding: 20px;
  border-right: 1px solid #1e293b;
  font-family: 'Poppins', sans-serif;
}

/* CONTENIDO */
.content {
  margin-left: 200px; /* 👈 clave para que no se encime */
  padding: 20px;
  width: 100%;
}

/* BOTÓN */
.logo-btn {
  width: 100%;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* MENÚ */
.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 15px 0;
}

/* LINKS */
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