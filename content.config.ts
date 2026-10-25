// content.config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Un documento JSON por producto (content/productos/*.json)
    productos: defineCollection({
      type: 'data',
      source: 'productos/**.json',
      schema: z.object({
        codigo: z.string(),
        nombre: z.string(),
        descripcion: z.string(),
        categoria: z.string(),
        mascota: z.string(),
        marca: z.string(),
        precio: z.number(),
        presentacion: z.string(),
        imagen: z.string()
      })
    }),
    // Un documento JSON por categoría (content/categorias/*.json)
    categorias: defineCollection({
      type: 'data',
      source: 'categorias/**.json',
      schema: z.object({
        slug: z.string(),
        nombre: z.string(),
        descripcion: z.string(),
        orden: z.number()
      })
    })
  }
})
