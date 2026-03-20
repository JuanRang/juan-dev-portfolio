<script setup lang="ts">
const proyectos = [
  {
    titulo: 'Portafolio Web',
    descripcion: 'Mi página personal hecha con Nuxt',
    tecnologias: ['Vue', 'Nuxt', 'CSS']
  },
  {
    titulo: 'API REST',
    descripcion: 'Backend con Node y Express',
    tecnologias: ['Node', 'Express']
  },
  {
    titulo: 'App Escolar',
    descripcion: 'Sistema escolar',
    tecnologias: ['Vue', 'Firebase']
  }
]
</script>

<template>
  <div>
    <h1>Mis Proyectos</h1>

    <!-- 👇 CONTENEDOR GRID -->
    <div class="grid">
      <ProjectCard
        v-for="(p, i) in proyectos"
        :key="i"
        :titulo="p.titulo"
        :descripcion="p.descripcion"
        :tecnologias="p.tecnologias"
      />
    </div>

  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>