/*
<script setup>
/*
throw createError({
  statusCode: 500, 
  statusMessage: 'Probando error.vue'
  })
  */
</script>

<script setup lang="ts">
</script>

<template>
  <div class="layout">

    <!-- Sidebar -->
    <AppSideBar />

    <!-- Contenido principal -->
    <div class="main">

      <Background />

      <div class="container">
        <ColorModeButton />
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>

      <slot />

    </div>

  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

/* Sidebar ocupa espacio */
.main {
  margin-left: 200px;
  width: 100%;
}
</style>
<style scoped>
.layout {
  display: flex;
}

.main {
  margin-left: 200px; /* mismo ancho del sidebar */
  width: 100%;
}
</style>