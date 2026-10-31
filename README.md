# EXEX

Proyecto de Electiva I: clon de X hecho con React y TypeScript.

**Equipo:** Brahian Montoya y Camilo Molina.

**Integrantes:** Brahian Montoya Obando y Camilo Molina.

## Cómo ejecutarlo

Se necesita Node.js 20.19+ o 22.12+ y npm. Usamos React, Vite, Bootstrap y Firebase.

1. Clonar el repositorio.
2. Ejecutar `npm ci`.
3. Crear `.env.local` con la configuración de Firebase en las variables `VITE_FIREBASE_*` que usa `src/firebase/config.ts`.
4. Ejecutar `npm run dev` y abrir el enlace que aparece.

Para revisar el proyecto: `npm run build` y `npm run lint`.

## Primera entrega

Incluye registro, login con usuario, inicio, publicaciones, seguidores, seguidos, perfiles y feed paginado.

El registro y login usan Firebase. Los tweets y seguimientos son de prueba; los tweets nuevos se pierden al recargar. El perfil de Inicio también usa datos de ejemplo.

Queda pendiente la opción de Google que aparece en el documento.

Las consultas con IA están en `bitacora.md`. La rama de entrega es `release/milestone-1`.

**Licencia:** todavía no hemos definido una.
