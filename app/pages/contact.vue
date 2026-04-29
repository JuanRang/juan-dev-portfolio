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

    // limpiar campos
    form.nombre = ''
    form.correo = ''
    form.telefono = ''
    form.proyecto = ''
    form.mensaje = ''

  } catch (error) {
    errorMsg.value = 'Ocurrió un error al enviar el mensaje.'
    console.error(error) // 👈 agrega esto para ver el error real
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <section class="contacto">

      <div class="contacto__card">
        <p class="contacto__tag">Contáctame</p>
        <h1 class="contacto__title">Hablemos de tu proyecto</h1>

        <!-- Botón dark mode -->
        <ColorModeButton />

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

        <!-- Menú -->
        <AppSideBar />

      </div>

    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background: #16001f;
  padding: 20px;
}

.contacto {
  display: flex;
  justify-content: center;
}

.contacto__card {
  max-width: 500px;
  width: 100%;
}

.contacto__title {
  color: white;
  text-align: center;
}

.contacto__text {
  text-align: center;
  color: #ccc;
}

.contacto__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contacto__group {
  display: flex;
  flex-direction: column;
}

input, textarea {
  padding: 10px;
  border-radius: 8px;
  border: none;
}

button {
  padding: 10px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.success {
  color: #4ade80;
  text-align: center;
}

.error {
  color: #f87171;
  text-align: center;
}
</style>