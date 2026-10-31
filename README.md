# EXEX — Clon de X

**Materia:** Electiva I — Desarrollo

**Equipo:** Brahian Montoya y Camilo Molina

**Integrantes:**
- Brahian Montoya Obando
- Camilo Molina

Aplicación web hecha con React para registrarse, iniciar sesión con nombre de usuario y recorrer publicaciones, seguidores y seguidos.

## Primera entrega

Incluye registro, login, inicio, formulario para publicar, listas de seguidores y seguidos, tweets de usuario, feed y encabezado compartido. Las listas y publicaciones tienen paginación de hasta diez elementos.

La autenticación y los perfiles del registro usan Firebase. Las funciones sociales siguen usando datos de ejemplo: el autor de las publicaciones es el usuario mock, los tweets nuevos se conservan mientras se navega y se pierden al recargar. Los seguimientos son temporales por pantalla. El perfil lateral de Inicio también es de ejemplo; el encabezado muestra la cuenta autenticada.

La opción de acceso con Google u otro proveedor no está incluida. El documento del proyecto la contempla en el primer milestone, por lo que ese punto queda pendiente.

## Requisitos

- Node.js compatible con Vite 8: 20.19 o superior en la rama 20, o 22.12 o superior.
- npm.
- Proyecto de Firebase con Authentication por correo y contraseña y Cloud Firestore habilitados.

Se utilizan React, TypeScript, React Router, Firebase y Bootstrap 5.3.8 mediante CDN. Se necesita conexión a internet para cargar Bootstrap y acceder a Firebase.

## Instalación y ejecución

1. Clonar el repositorio y entrar en su carpeta.
2. Ejecutar `npm ci`.
3. Copiar `.env.example` como `.env.local` y completar las variables con la configuración web del proyecto de Firebase. No subir `.env.local` a Git.
4. Ejecutar `npm run dev` y abrir la dirección que indique Vite.

En Firebase debe estar autorizado el dominio local utilizado. Las reglas de Firestore deben permitir las operaciones que realiza la aplicación: consultar el nombre y perfil antes del login y crear el perfil durante el registro. La configuración de permisos para producción requiere una revisión específica; el modo de prueba no es una configuración de producción.

## Comprobaciones

```sh
npm run build
npm run lint
npm run preview
```

`build` genera la aplicación en `dist`. `preview` permite revisar esa compilación localmente.

## Organización

- `src/auth`: formularios, contexto, interfaces y reducer de autenticación.
- `src/firebase`: configuración y operaciones con Firebase.
- `src/exex`: pantallas, componentes, contexto de publicaciones y rutas de la red social.
- `src/data`: usuarios, tweets y seguimientos de ejemplo.
- `src/ui`: encabezado y paginación compartidos.
- `src/routes`: navegación según la sesión.
- `bitacora.md`: consultas de soporte y enlaces a las conversaciones.

## Ramas

Las funcionalidades se integran en `develop` mediante pull requests. `release/milestone-1` prepara la primera entrega para `main`.

## Licencia

El equipo todavía no ha definido una licencia de distribución para este proyecto académico.
