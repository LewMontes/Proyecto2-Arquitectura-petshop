<!-- app/components/SnipcartLoader.vue -->
<!-- Carga Snipcart sólo en el navegador (mismo enfoque que CommentsUtterances del Tutorial 8) -->
<script setup>
// Reemplazar por la API Key pública (modo Test) de su cuenta de Snipcart:
// Dashboard de Snipcart → Account Settings → API Keys
const SNIPCART_API_KEY = 'REEMPLAZAR_CON_SU_API_KEY_PUBLICA'

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
