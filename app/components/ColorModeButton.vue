<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(v: boolean) {
    colorMode.preference = v ? 'dark' : 'light'
  }
})

// Aplicar cambio de tema
const applyTheme = (value: boolean) => {
  isDark.value = value
}

// Animación radial
const startViewTransition = (event: MouseEvent) => {
  const target = event.target as HTMLInputElement
  const nextValue = target.checked

  // Si el navegador no soporta animación
  if (!(document as any).startViewTransition) {
    applyTheme(nextValue)
    return
  }

  const x = event.clientX
  const y = event.clientY

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = (document as any).startViewTransition(() => {
    applyTheme(nextValue)
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <div>
    <label class="switch">
      <input
        id="input"
        type="checkbox"
        :checked="isDark"
        @click="startViewTransition"
      />

      <div class="slider round">
        <div class="sun-moon">
          <svg class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>

          <svg class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>

          <svg class="cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>

          <svg class="cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
          <svg class="cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
        </div>

        <div class="stars">
          <svg class="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 ,10 10 ,10 20 C 10 10 ,10 10 ,20 10 C 10 10 ,10 10 ,10 0 C 10 10,10 10 ,0 10 Z"/>
          </svg>
          <svg class="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 ,10 10 ,10 20 C 10 10 ,10 10 ,20 10 C 10 10 ,10 10 ,10 0 C 10 10,10 10 ,0 10 Z"/>
          </svg>
          <svg class="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 ,10 10 ,10 20 C 10 10 ,10 10 ,20 10 C 10 10 ,10 10 ,10 0 C 10 10,10 10 ,0 10 Z"/>
          </svg>
          <svg class="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 ,10 10 ,10 20 C 10 10 ,10 10 ,20 10 C 10 10 ,10 10 ,10 0 C 10 10,10 10 ,0 10 Z"/>
          </svg>
        </div>
      </div>
    </label>
  </div>
</template>

<style scoped>
.switch {
  display: inline-block;
}

input {
  display: none;
}
</style>