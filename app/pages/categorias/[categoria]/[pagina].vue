<!-- app/pages/categorias/[categoria]/[pagina].vue -->
<script setup>
const POR_PAGINA = 4

const route = useRoute()
const slug = route.params.categoria
const pagina = Number(route.params.pagina) || 1

const { data: categoria } = await useAsyncData(`categoria-${slug}`, () => {
  return queryCollection('categorias').where('slug', '=', slug).first()
})

if (!categoria.value) {
  throw createError({ statusCode: 404, statusMessage: 'Categoría no encontrada' })
}

const { data: total } = await useAsyncData(`total-${slug}`, () => {
  return queryCollection('productos').where('categoria', '=', slug).count()
})

const { data: productos } = await useAsyncData(`productos-${slug}-${pagina}`, () => {
  return queryCollection('productos')
    .where('categoria', '=', slug)
    .order('nombre', 'ASC')
    .skip((pagina - 1) * POR_PAGINA)
    .limit(POR_PAGINA)
    .all()
})

const totalPaginas = computed(() => Math.ceil((total.value || 0) / POR_PAGINA))

useHead({ title: categoria.value.nombre })
</script>

<template>
  <div>
    <p class="migas">
      <NuxtLink to="/">Inicio</NuxtLink> › {{ categoria.nombre }}
    </p>
    <h4>{{ categoria.nombre }}</h4>
    <p>{{ categoria.descripcion }} ({{ total }} productos)</p>
    <div class="row">
      <div v-for="p in productos" :key="p.codigo" class="three columns">
        <ProductoTarjeta :producto="p" />
      </div>
    </div>
    <PaginacionView :base="`/categorias/${slug}`" :pagina="pagina" :total-paginas="totalPaginas" />
  </div>
</template>
