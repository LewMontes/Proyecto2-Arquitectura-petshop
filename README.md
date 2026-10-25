# Proyecto 2 — Petshop Patitas (Tienda de mascotas)

Aplicación de comercio electrónico en **Nuxt 4 + Nuxt Content**, con carrito **Snipcart** y comentarios **Utterances**.

## Cómo cumple el enunciado

| Requisito | Implementación |
|---|---|
| Catálogo de ≥ 30 artículos en JSON | 36 productos, un documento JSON por producto en `content/productos/` (nombre, descripción, categoría, imagen, precio, marca, mascota, presentación) |
| Listas de categorías | 6 categorías, un JSON por categoría en `content/categorias/` |
| Organización por categorías | Inicio presenta las categorías → `/categorias/[categoria]/[pagina]` lista sus productos → `/productos/[codigo]` muestra el detalle |
| Búsqueda | Campo de búsqueda en el encabezado; `/buscar` filtra por nombre, descripción, marca y tipo de mascota (Tutorial 3) |
| Paginación | 4 productos por página con `.skip()` / `.limit()` y `.count()`; componente `PaginacionView` con Anterior / números / Siguiente |
| Snipcart | Botón **Agregar al carrito** en cada artículo (`BotonCompra.vue`) y botón **Carrito** en el menú principal |
| Utterances | `CommentsUtterances.vue` (Tutorial 8) en la página de detalle de cada producto |

## Ejecutar localmente

```
npm install
npm run dev
```
Abrir http://localhost:3000

## Configuración antes de publicar

1. **Snipcart**: crear cuenta en snipcart.com, copiar la *Public API Key* (modo Test) y pegarla en
   `app/components/SnipcartLoader.vue` (constante `SNIPCART_API_KEY`). En el dashboard de Snipcart,
   en *Domains & URLs*, agregar el dominio de Netlify del sitio.
2. **Utterances**: el repositorio `LewMontes/Proyecto2-Arquitectura-petshop` debe ser público; instalar
   la aplicación desde https://github.com/apps/utterances en ese repositorio.

## Publicación en Netlify

Subir el proyecto a GitHub y conectarlo en Netlify:
- Branch to deploy: `main`
- Build command: `npm run build`
- Publish directory: `dist`

## Estructura

```
content/categorias/*.json     categorías
content/productos/*.json      productos
public/img/productos/         imágenes de productos
public/css/                   normalize + skeleton + estilos propios
app/layouts/default.vue       encabezado y pie comunes
app/components/               HeaderView, FooterView, ProductoTarjeta, BotonCompra,
                              PaginacionView, CommentsUtterances, SnipcartLoader
app/pages/                    index, buscar, categorias/[categoria]/[pagina], productos/[codigo]
```
