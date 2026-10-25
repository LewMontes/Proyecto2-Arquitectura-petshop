<!-- app/components/BotonCompra.vue -->
<!-- Botón de compra de Snipcart: los atributos data-item-* describen el producto -->
<script setup>
defineProps({
  producto: { type: Object, required: true }
})
</script>

<template>
  <button
    class="button-primary snipcart-add-item"
    :data-item-id="producto.codigo"
    :data-item-name="producto.nombre"
    :data-item-price="producto.precio"
    :data-item-url="`/productos/${producto.codigo}`"
    :data-item-description="producto.descripcion"
    :data-item-image="producto.imagen"
  >
    Agregar al carrito
  </button>
</template>
