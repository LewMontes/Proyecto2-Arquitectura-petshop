export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  app: {
    head: {
      titleTemplate: '%s - Petshop Patitas',
      title: 'Inicio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tienda en línea de productos para mascotas' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: '/css/normalize.css' },
        { rel: 'stylesheet', href: '/css/skeleton.css' },
        { rel: 'stylesheet', href: '/css/petshop.css' },
        // Snipcart (comercio electrónico)
        { rel: 'preconnect', href: 'https://app.snipcart.com' },
        { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css' }
      ]
    }
  }
})
