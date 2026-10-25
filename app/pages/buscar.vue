<!-- app/pages/buscar.vue -->
<script setup>
useHead({ title: 'Búsqueda' })

const route = useRoute()
const busqueda = computed(() => (route.query.q || '').toString().trim())

const { data: productos } = await useAsyncData('productos-busqueda', () => {
  return queryCollection('productos').order('nombre', 'ASC').all()
})

// Filtrado en el cliente sobre los productos ya cargados (Tutorial 3)
const resultados = computed(() => {
  if (!busqueda.value) return []
  const q = busqueda.value.toLowerCase()
  return (productos.value || []).filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.descripcion.toLowerCase().includes(q) ||
    p.marca.toLowerCase().includes(q) ||
    p.mascota.toLowerCase().includes(q)
  )
})
</script>

<template>
  <div>
    <p class="migas"><NuxtLink to="/">Inicio</NuxtLink> › Búsqueda</p>
    <h4>Resultados de búsqueda</h4>
    <p v-if="!busqueda">Escriba una palabra clave en el campo de búsqueda (por ejemplo: gato, collar, NutriCan).</p>
    <template v-else>
      <p>{{ resultados.length }} producto(s) encontrados para "<strong>{{ busqueda }}</strong>".</p>
      <table v-if="resultados.length" class="u-full-width">
        <thead>
          <tr><th>Producto</th><th>Marca</th><th>Mascota</th><th>Precio</th><th /></tr>
        </thead>
        <tbody>
          <tr v-for="p in resultados" :key="p.codigo">
            <td><NuxtLink :to="`/productos/${p.codigo}`">{{ p.nombre }}</NuxtLink></td>
            <td>{{ p.marca }}</td>
            <td>{{ p.mascota }}</td>
            <td>${{ p.precio.toFixed(2) }}</td>
            <td><BotonCompra :producto="p" /></td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>
