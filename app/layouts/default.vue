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

        <!-- 🔥 SOLO ESTO -->
        <slot />

        <AppFooter />
      </div>

    </div>

  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.main {
  margin-left: 200px;
  width: 100%;
}
</style>