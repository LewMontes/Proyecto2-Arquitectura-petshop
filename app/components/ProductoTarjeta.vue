<!-- app/components/ProductoTarjeta.vue -->
<script setup>
defineProps({
  producto: { type: Object, required: true }
})
</script>

<template>
  <div class="tarjeta">
    <NuxtLink :to="`/productos/${producto.codigo}`">
      <img :src="producto.imagen" :alt="producto.nombre">
    </NuxtLink>
    <h6><NuxtLink :to="`/productos/${producto.codigo}`">{{ producto.nombre }}</NuxtLink></h6>
    <p style="margin-bottom: 6px">{{ producto.marca }} · {{ producto.mascota }}</p>
    <p class="precio" style="margin-bottom: 8px">${{ producto.precio.toFixed(2) }}</p>
    <BotonCompra :producto="producto" />
  </div>
</template>
