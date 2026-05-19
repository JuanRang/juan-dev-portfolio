<script setup lang="ts">
defineProps<{
  titulo: string
  descripcion: string
  tecnologias: string[]
  url?: string
}>()
</script>

<template>
  <div class="card">
    <h3 class="title">{{ titulo }}</h3>
    <p class="desc">{{ descripcion }}</p>

    <div class="techs">
      <span v-for="(tech, i) in tecnologias" :key="i" class="tech">
        {{ tech }}
      </span>
      <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="url-link">
        Ver proyecto
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  color: black;
  transition: 0.2s;

  /* 👇 clave para que no se salga */
  width: 100%;
  max-width: 280px;
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-3px);
}

/* DARK MODE */
.dark .card {
  background: #020617;
  border: 1px solid #1e293b;
  color: white;
}

/* TITULO */
.title {
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 600;
}

/* DESCRIPCIÓN */
.desc {
  font-size: 13px;
  color: #374151;
  margin-bottom: 10px;
}

.dark .desc {
  color: #94a3b8;
}

/* TECNOLOGÍAS */
.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

/* TAGS */
.tech {
  background: #e5e7eb;
  color: black;
  padding: 3px 7px;
  border-radius: 6px;
  font-size: 11px;
}

.dark .tech {
  background: #1e293b;
  color: white;
}

/* BOTÓN */
.url-link {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  font-size: 12px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  width: 100%;
  text-align: center;
}

.url-link:hover {
  background: #2563eb;
}
</style>