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
/* CARD */
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 15px;
  color: black;
  transition: 0.2s;
}

/* DARK MODE */
.dark .card {
  background: #020617;
  border: 1px solid #1e293b;
  color: white;
}

.card:hover {
  transform: translateY(-3px);
}

/* TITULO */
.title {
  margin-bottom: 8px;
  color: black;
}

.dark .title {
  color: white;
}

/* DESCRIPCIÓN */
.desc {
  font-size: 14px;
  color: #374151;
}

.dark .desc {
  color: #94a3b8;
}

/* TECNOLOGÍAS */
.techs {
  margin-top: 10px;
}

.tech {
  background: #e5e7eb;
  color: black;
  padding: 4px 8px;
  border-radius: 6px;
  margin-right: 5px;
  font-size: 12px;
}

.dark .tech {
  background: #1e293b;
  color: white;
}

.url-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}

.url-link:hover {
  background: #1e293b;
}
</style>