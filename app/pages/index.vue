<!-- app/pages/index.vue -->
<script setup>
useHead({ title: 'Inicio' })

const { data: categorias } = await useAsyncData('categorias-inicio', () => {
  return queryCollection('categorias').order('orden', 'ASC').all()
})
</script>

<template>
  <div>
    <h4 style="margin-top: 20px">Todo para tu mascota</h4>
    <p>Explora nuestro catálogo por categoría, o utiliza el buscador para encontrar un producto específico.</p>
    <div class="row">
      <div v-for="cat in categorias" :key="cat.slug" class="four columns tarjeta" style="margin-left: 0; margin-right: 2%; width: 31%">
        <h5 style="margin-bottom: 6px">
          <NuxtLink :to="`/categorias/${cat.slug}/1`">{{ cat.nombre }}</NuxtLink>
        </h5>
        <p style="margin-bottom: 10px">{{ cat.descripcion }}</p>
        <NuxtLink class="button" :to="`/categorias/${cat.slug}/1`">Ver productos</NuxtLink>
      </div>
    </div>
  </div>
</template>
