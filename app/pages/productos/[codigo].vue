<!-- app/pages/productos/[codigo].vue -->
<script setup>
const route = useRoute()

const { data: producto } = await useAsyncData(`producto-${route.params.codigo}`, () => {
  return queryCollection('productos').where('codigo', '=', route.params.codigo).first()
})

if (!producto.value) {
  throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado' })
}

const { data: categoria } = await useAsyncData(`categoria-de-${route.params.codigo}`, () => {
  return queryCollection('categorias').where('slug', '=', producto.value.categoria).first()
})

const { data: relacionados } = await useAsyncData(`relacionados-${route.params.codigo}`, () => {
  return queryCollection('productos')
    .where('categoria', '=', producto.value.categoria)
    .where('codigo', '<>', producto.value.codigo)
    .limit(3)
    .all()
})

useHead({ title: producto.value.nombre })
</script>

<template>
  <div>
    <p class="migas">
      <NuxtLink to="/">Inicio</NuxtLink> ›
      <NuxtLink :to="`/categorias/${categoria?.slug}/1`">{{ categoria?.nombre }}</NuxtLink> ›
      {{ producto.nombre }}
    </p>
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="producto.imagen" :alt="producto.nombre" style="border-radius: 6px">
      </div>
      <div class="seven columns">
        <h4>{{ producto.nombre }}</h4>
        <p>{{ producto.descripcion }}</p>
        <table class="u-full-width">
          <tbody>
            <tr><td><strong>Marca</strong></td><td>{{ producto.marca }}</td></tr>
            <tr><td><strong>Mascota</strong></td><td>{{ producto.mascota }}</td></tr>
            <tr><td><strong>Presentación</strong></td><td>{{ producto.presentacion }}</td></tr>
            <tr><td><strong>Categoría</strong></td><td>{{ categoria?.nombre }}</td></tr>
          </tbody>
        </table>
        <p class="precio">${{ producto.precio.toFixed(2) }}</p>
        <BotonCompra :producto="producto" />
      </div>
    </div>

    <h5>Otros productos de {{ categoria?.nombre }}</h5>
    <ul>
      <li v-for="r in relacionados" :key="r.codigo">
        <NuxtLink :to="`/productos/${r.codigo}`">{{ r.nombre }}</NuxtLink> — ${{ r.precio.toFixed(2) }}
      </li>
    </ul>

    <h5>Comentarios</h5>
    <CommentsUtterances repo="LewMontes/Proyecto2-Arquitectura-petshop" />
  </div>
</template>
