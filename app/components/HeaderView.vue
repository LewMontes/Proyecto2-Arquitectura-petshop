<!-- app/components/HeaderView.vue -->
<script setup>
const route = useRoute()
const texto = ref('')

const { data: categorias } = await useAsyncData('menu-categorias', () => {
  return queryCollection('categorias').order('orden', 'ASC').select('slug', 'nombre').all()
})

function buscar() {
  navigateTo({ path: '/buscar', query: { q: texto.value } })
}

// Si la búsqueda se hizo desde la página /buscar, se mantiene el texto en el campo
watch(() => route.query.q, (q) => { texto.value = q || '' }, { immediate: true })
</script>

<template>
  <div class="encabezado">
    <div class="row">
      <div class="six columns">
        <h3><NuxtLink to="/">🐾 Petshop Patitas</NuxtLink></h3>
      </div>
      <div class="six columns">
        <form class="form-busqueda" @submit.prevent="buscar">
          <input v-model="texto" type="search" placeholder="Buscar productos..." aria-label="Buscar productos">
          <input type="submit" class="button-primary" value="Buscar">
        </form>
      </div>
    </div>
    <div class="row menu">
      <NuxtLink class="button" to="/">Inicio</NuxtLink>
      <NuxtLink
        v-for="cat in categorias"
        :key="cat.slug"
        class="button"
        :to="`/categorias/${cat.slug}/1`"
      >{{ cat.nombre }}</NuxtLink>
      <button class="button button-primary snipcart-checkout">
        🛒 Carrito (<span class="snipcart-items-count">0</span>)
      </button>
    </div>
  </div>
</template>
