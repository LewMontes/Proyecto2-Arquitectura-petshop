<!-- app/components/SnipcartLoader.vue -->
<script setup>
const SNIPCART_API_KEY = 'M2U0MDFkNzMtZGI3My00ZjcyLTkwNGQtMGM3ZmIyNmFmZDMxNjM5Mjg0ODQ3MDEzMTQ1MzMx'

onMounted(() => {
  if (document.getElementById('snipcart')) return
  const div = document.createElement('div')
  div.id = 'snipcart'
  div.hidden = true
  div.setAttribute('data-api-key', SNIPCART_API_KEY)
  div.setAttribute('data-config-modal-style', 'side')
  div.setAttribute('data-currency', 'usd')
  document.body.appendChild(div)

  const script = document.createElement('script')
  script.src = 'https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <span />
</template>
