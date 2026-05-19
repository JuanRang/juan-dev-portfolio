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
  },
  {
    titulo: 'Descomprimison de imagenes 3D',
    descripcion: 'Sistema escolar',
    tecnologias: ['Vue', 'Firebase'],
    url: 'https://descomprimison.vercel.app/'
  }
]
</script>

<template>
  <div>
    <h1>Mis Proyectos</h1>

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  /* 👇 esto evita que se estire toda la pantalla */
  max-width: 900px;
  margin: 0 auto;

  padding: 10px;
}
</style>