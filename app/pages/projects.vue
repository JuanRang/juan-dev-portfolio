<script setup lang="ts">
const proyectos = [
  {
    titulo: 'Ajedrez 3D',
    descripcion: 'Juego de ajedrez en 3D hecho con Three.js',
    tecnologias: ['Vue', 'Three.js', 'CSS'],
    url: 'https://ajedrez3d.vercel.app/'
  },
  {
     
    titulo: 'Herramientas de Producción',
    descripcion: 'Backend con Node y Express',
    tecnologias: ['Nuxt', 'npm', 'Express'],
    url: 'https://dev-herramientas-produccion.vercel.app/'
  
  },
  {
    titulo: 'Imagen 3D',
    descripcion: 'Sistema escolar',
    tecnologias: ['Vue', 'Firebase'],
    url: 'https://proyecto-3d-nine.vercel.app/'
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
        :url="p.url"
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