<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  proyecto: '',
  mensaje: '',
})
const loading = ref(false)
const enviado = ref(false)
const errorMsg = ref('')

const handleSubmit = async () => {
  errorMsg.value = ''
  enviado.value = false

  if (!form.nombre || !form.correo || !form.telefono || !form.proyecto || !form.mensaje) {
    errorMsg.value = 'Por favor completa todos los campos.'
    return
  }

  loading.value = true

  try {
    await $fetch('https://script.google.com/macros/s/AKfycby0ZspVaaNyzRvGBqnRDi5VDhiJP8Df0HQgXcWdLpwCUX7SD7mfTqZWH-YqX6ulug/exec', {
      method: 'POST',
      body: new URLSearchParams(form as any)
    })

    enviado.value = true

    form.nombre = ''
    form.correo = ''
    form.telefono = ''
    form.proyecto = ''
    form.mensaje = ''

  } catch (error) {
    errorMsg.value = 'Ocurrió un error al enviar el mensaje.'
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="contacto-wrapper">
    
    <p class="contacto__tag">Contáctame</p>
    <h1 class="contacto__title">Hablemos de tu proyecto</h1>

    <p class="contacto__text">
      Si tienes una idea o propuesta, mándame un mensaje.
    </p>

    <form class="contacto__form" @submit.prevent="handleSubmit">

      <div class="contacto__group">
        <label>Nombre</label>
        <input v-model="form.nombre" type="text" placeholder="Tu nombre" />
      </div>

      <div class="contacto__group">
        <label>Correo</label>
        <input v-model="form.correo" type="email" placeholder="correo@email.com" />
      </div>

      <div class="contacto__group">
        <label>Teléfono</label>
        <input v-model="form.telefono" type="tel" placeholder="Tu número de teléfono" />
      </div>

      <div class="contacto__group">
        <label>Proyecto</label>
        <input v-model="form.proyecto" type="text" placeholder="Describe tu proyecto" />
      </div>

      <div class="contacto__group">
        <label>Mensaje</label>
        <textarea v-model="form.mensaje" rows="5"></textarea>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
      </button>

      <p v-if="enviado" class="success">
        ✅ Mensaje enviado correctamente
      </p>

      <p v-if="errorMsg" class="error">
        {{ errorMsg }}
      </p>

    </form>

    <AppSideBar />
  </div>
</template>

<style scoped>
.contacto-wrapper {
  width: 100%;
  max-width: 500px; 
  margin: 0 auto;
  /* Reducimos el padding general para que la caja sea más corta */
  padding: 5px 24px 20px; 
  box-sizing: border-box;
}

/* TEXTOS MAS JUNTOS */
.contacto__tag {
  text-align: center;
  color: #aaa;
  font-size: 13px;
  /* Un margen moderado para no empujar de más la foto */
  margin-top: 25px; 
  margin-bottom: 2px;
}

.contacto__title {
  color: white;
  text-align: center;
  font-size: 24px; /* Un poco más pequeña */
  margin: 0 0 5px 0;
}

.contacto__text {
  text-align: center;
  color: #ccc;
  font-size: 13px;
  margin-bottom: 15px; /* Menos espacio muerto aquí */
}

/* FORMULARIO COMPACTO */
.contacto__form {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Inputs más pegados entre sí */
  width: 100%;
}

.contacto__group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
}

.contacto__group label {
  color: white;
  font-weight: 500;
  font-size: 13px;
}

/* INPUTS MAS CHICOS (Menos altos) */
input {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px; /* Reducimos el colchón interno */
  border-radius: 6px;
  border: none;
  background-color: white;
  color: #333;
  font-size: 13px;
}

/* TEXTAREA MAS BAJO */
textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  background-color: white;
  color: #333;
  font-size: 13px;
  resize: none; /* Evita que el usuario lo deforme */
}

/* BOTÓN MAS DELGADO */
button {
  width: 100%;
  padding: 10px; /* Más delgado */
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  margin-top: 5px;
}

button:disabled {
  background-color: #555;
  cursor: not-allowed;
}

.success {
  color: #4ade80;
  text-align: center;
  font-size: 13px;
}

.error {
  color: #f87171;
  text-align: center;
  font-size: 13px;
}

* {
  box-sizing: border-box;
}
</style>