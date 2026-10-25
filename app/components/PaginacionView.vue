<!-- app/components/PaginacionView.vue -->
<script setup>
const props = defineProps({
  base: { type: String, required: true },      // p.ej. /categorias/alimentos
  pagina: { type: Number, required: true },
  totalPaginas: { type: Number, required: true }
})
const paginas = computed(() => Array.from({ length: props.totalPaginas }, (_, i) => i + 1))
</script>

<template>
  <div v-if="totalPaginas > 1" class="paginacion">
    <NuxtLink v-if="pagina > 1" class="button" :to="`${base}/${pagina - 1}`">← Anterior</NuxtLink>
    <NuxtLink
      v-for="n in paginas"
      :key="n"
      class="button"
      :class="{ 'pagina-actual': n === pagina }"
      :to="`${base}/${n}`"
    >{{ n }}</NuxtLink>
    <NuxtLink v-if="pagina < totalPaginas" class="button" :to="`${base}/${pagina + 1}`">Siguiente →</NuxtLink>
    <span>Página {{ pagina }} de {{ totalPaginas }}</span>
  </div>
</template>
