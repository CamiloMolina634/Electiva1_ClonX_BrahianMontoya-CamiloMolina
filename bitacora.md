# Bitácora de Uso de Inteligencia Artificial

## Registro de Interacciones

### [2026-10-21]
- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > Quiero entender desde cero cómo configurar Bootstrap en mi proyecto de React, siguiendo el ejemplo de clase bloc_app. Explícame un paso a la vez y dime qué hace cada cambio
- **Resumen de la respuesta:**
  Bootstrap ya estaba conectado en index.html. La respuesta explicó los enlaces de carga y cómo usar sus clases en React.
- **Archivos creados/modificados:**
  - Ninguno. Se revisaron `index.html`, `src/main.tsx` y `package.json`, junto con los archivos del ejemplo `bloc_app`.

---

### [2026-10-21]
- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > Muéstrame cómo quedaría con Bootstrap 5.3.8, usando los enlaces en index.html.
- **Resumen de la respuesta:**
  El ejemplo mostró dónde van los enlaces del CSS y del JavaScript de Bootstrap 5.3.8. Esa configuración ya estaba en el proyecto.
- **Archivos creados/modificados:**
  - Ninguno. Archivo relacionado: `index.html` (configuración existente, explicada en la respuesta).

---

### [2026-10-21]
- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Qué tendría que quitar si antes lo instalé con npm y lo importé en main.tsx?
- **Resumen de la respuesta:**
  Para usar los enlaces basta con quitar los imports de Bootstrap y desinstalar el paquete. El import de index.css se conserva. En esta consulta no se hicieron cambios.
- **Archivos creados/modificados:**
  - Ninguno. Archivos relacionados: `src/main.tsx`, `package.json` y `package-lock.json`. Los pasos fueron explicados; no se ejecutaron en esta conversación.

---

### [2026-10-21]
- **Herramienta / Modelo:** Codex 
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Cómo dejo index.css básico, sin personalizar todavía los botones ni los formularios?
- **Resumen de la respuesta:**
  La propuesta fue dejar el ancho mínimo del body y quitar las reglas de la pantalla inicial si ya no se necesitan. Los botones y campos usarían las clases de Bootstrap.
- **Archivos creados/modificados:**
  - Ninguno. Se revisó `src/index.css` y se propuso una simplificación, sin modificarlo.

---

### [2026-10-21]
- **Herramienta / Modelo:** Codex 
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Cómo compruebo que quedó funcionando?
- **Resumen de la respuesta:**
  La prueba propuesta fue mostrar un botón con btn btn-primary y abrir la aplicación con npm run dev. Eso permite revisar el CSS. La prueba no se ejecutó en ese chat.
- **Archivos creados/modificados:**
  - Ninguno. Se sugirió una prueba en `src/ExexApp.tsx`, sin aplicarla.

---



## Consultas de soporte — Brahian Montoya Obando — 25 de octubre de 2026

Todas las horas corresponden a Colombia (UTC-5).

Las pruebas y aprobaciones mencionadas por el usuario se distinguen de las comprobaciones realizadas por el asistente.

### CONSULTA 1 — 1:20 p. m.

- **Pregunta realizada:** Mi componente UserListItem recibe una propiedad user de tipo User. ¿Qué son las props y cómo funciona ({ user }: UserListItemProps)?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se explicó cómo un componente padre pasa datos a un hijo mediante props y cómo se combinan la desestructuración y el tipado de TypeScript, con un ejemplo sencillo.
- **Archivos o conceptos involucrados:** UserListItem, User, UserListItemProps, props, desestructuración y tipos.
- **Estado:** Ejemplo explicativo propuesto. No se revisaron ni modificaron archivos ni se ejecutó código.

---

### CONSULTA 2 — 1:25 p. m.

- **Pregunta realizada:** ¿Por qué conviene crear un componente reutilizable para cada usuario y cómo se utiliza dentro de una lista con map?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se explicó cómo reutilizar la presentación de cada usuario y generar una lista con map, pasando la prop user y asignando una key estable. Se mostró un enlace al perfil mediante Link.
- **Archivos o conceptos involucrados:** UserListItem, UserList, props, map, key, Link, ul y li.
- **Estado:** Ejemplo propuesto con una ruta de perfil supuesta. No se modificaron archivos ni se ejecutó código.

---

### CONSULTA 3 — 1:36 p. m.

- **Pregunta realizada:** ¿Cómo combinar mockUsers y mockFollows para obtener únicamente los usuarios que sigue Brahian, excluyendo a quienes solo lo siguen a él?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se propuso filtrar las relaciones donde Brahian es el seguidor, extraer los identificadores seguidos y buscar los usuarios correspondientes mediante filter, map y Set.
- **Archivos o conceptos involucrados:** mockUsers, mockFollows, filter, map, Set, followerId, followingId y UserListItem.
- **Estado:** Ejemplo propuesto con nombres de campos y datos supuestos. No se revisaron archivos ni se ejecutó código.

---

### CONSULTA 4 — 1:36 p. m. (13:36:53)

- **Pregunta realizada:** Se indicó que el enlace compartido también debe actualizarse en cada consulta.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se generó un nuevo enlace que incluía la explicación sobre mockUsers y mockFollows, y se actualizó el registro de esa consulta.
- **Archivos o conceptos involucrados:** Bitácora y enlaces compartidos del chat.
- **Estado:** Enlace generado y registro actualizado en el chat. No se modificaron archivos.

---

### CONSULTA 5 — 1:39 p. m.

- **Pregunta realizada:** ¿Ana queda excluida de mis seguidos porque, aunque ella me sigue, yo no la sigo?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se confirmó que el seguimiento es direccional. Ana pertenece a los seguidores, pero solo aparecerá en los seguidos si Brahian también la sigue.
- **Archivos o conceptos involucrados:** Seguidores, seguidos, followerId y followingId.
- **Estado:** Aclaración conceptual realizada. No se modificaron archivos ni se ejecutaron pruebas.

---

### CONSULTA 6 — 2:01 p. m.

- **Pregunta realizada:** ¿Cómo mantener la correspondencia de los seguimientos al sustituir identificadores mock por UID de Firebase? ¿Basta con renombrar id a uid?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se explicó que deben coincidir los valores de los identificadores, no solo los nombres de los campos. Se propuso mantener id en el modelo y asignarle el UID real, actualizando también las referencias en las relaciones.
- **Archivos o conceptos involucrados:** User, datos mock, Firebase Authentication, uid, followerId, followingId y correspondencia de identificadores.
- **Estado:** Documentación oficial consultada y solución propuesta. No se modificaron archivos ni se comprobó una integración con Firebase.
- **Fuente consultada:** [Documentación de Firebase](https://firebase.google.com/docs/auth/web/manage-users#get_a_users_profile)

---

### CONSULTA 7 — 2:40 p. m.

- **Pregunta realizada:** Ayuda para completar la descripción de un pull request sobre la pantalla de usuarios seguidos.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se redactó la descripción con datos mock, compatibilidad del modelo de Camilo, orden alfabético por nombre completo, paginación de diez usuarios, botones desactivados en los extremos, enlaces hacia los tweets de cada usuario y diseño adaptable. Se incorporaron las pruebas y la aprobación de Camilo reportadas por el usuario.
- **Archivos o conceptos involucrados:** Usuarios seguidos, modelo de usuario, componentes reutilizables, paginación, diseño adaptable y descripción del pull request.
- **Estado:** Texto preparado para copiar. Las pruebas y la aprobación fueron reportadas por el usuario. No se modificaron archivos, no se ejecutaron pruebas ni se creó el pull request.

---

### CONSULTA 8 — 2:43 p. m.

- **Pregunta realizada:** Se precisó que el requisito de la pantalla de usuarios seguidos es RF-05.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se actualizó la tarea relacionada de la descripción a RF-05: Usuarios seguidos.
- **Archivos o conceptos involucrados:** RF-05 y descripción del pull request.
- **Estado:** Texto actualizado en el chat. No se modificaron archivos ni el pull request.

---

### CONSULTA 9 — 5:32 p. m.

- **Pregunta realizada:** Transcribir los valores de configuración de Firebase de una imagen para copiarlos y pegarlos.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se transcribieron las variables de entorno mostradas en la imagen para colocarlas en .env.local.
- **Archivos o conceptos involucrados:** Imagen adjunta, .env.example, .env.local y configuración de Firebase.
- **Estado:** Transcripción realizada. No se crearon archivos ni se comprobó la conexión con Firebase. En esa consulta quedó pendiente generar el enlace; se incorpora aquí el enlace actualizado.

---

### CONSULTA 10 — 5:47 p. m.

- **Pregunta realizada:** ¿Es importante conservar .env.example si es una plantilla? ¿Por qué Git la muestra como eliminada después de renombrarla?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se explicó que debe conservarse la plantilla compartida y crear una copia llamada .env.local. Se propuso restaurar la plantilla con git restore .env.example y comprobar que la configuración local esté excluida mediante .gitignore.
- **Archivos o conceptos involucrados:** .env.example, .env.local, .gitignore, renombrado de archivos y git restore.
- **Estado:** Explicación y comandos propuestos. No se inspeccionó el repositorio ni se ejecutaron cambios.

---

### CONSULTA 11 — 5:51 p. m.

- **Pregunta realizada:** Reunir todas las bitácoras de hoy en un archivo TXT con sus enlaces.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ade87ebcc488191bf018ef8f9715e45)
- **Resumen breve de la respuesta:** Se recopilaron las consultas reales del 25 de octubre de 2026 y se preparó un archivo de texto con sus horas, preguntas, resúmenes, conceptos, estados y enlace actualizado del chat.
- **Archivos o conceptos involucrados:** bitacoras_2026-10-25.txt, registros de consultas y enlaces compartidos.
- **Estado:** Archivo TXT generado. No se modificó el código de EXEX ni se ejecutaron pruebas del proyecto.

---

---


## Consultas de soporte — Brahian Montoya Obando

### Consulta — 23/10/2026, 10:56 a. m. (Colombia)

- **Pregunta realizada:** Solicitud de apoyo para comprender conceptos y resolver dudas o errores puntuales de EXEX.
- **Resumen de la respuesta:** Se acordó brindar explicaciones breves y claras, usar identificadores y comentarios de código en inglés y registrar únicamente consultas y acciones reales.
- **Archivos o conceptos involucrados:** React, TypeScript, Vite, React Router v6, datos mock, tweets, seguidores, seguidos y feed.
- **Estado:** Alcance de apoyo establecido. No se revisaron ni modificaron archivos.

### Consulta — 23/10/2026, 11:03 a. m. (Colombia)

- **Pregunta realizada:** Ayuda para completar la descripción de un pull request sobre la publicación simulada de tweets.
- **Resumen de la respuesta:** Se redactó la descripción con funcionalidades, requisito relacionado, pruebas reportadas y revisión pendiente de Camilo.
- **Archivos o conceptos involucrados:** RF-04, publicación de tweets, datos mock, validación del formulario, persistencia durante la navegación y revisión de pull requests.
- **Estado:** Texto preparado para copiar. No se modificó el repositorio ni se ejecutaron pruebas; los resultados descritos fueron proporcionados por el usuario. No se creó el pull request.

### Consulta — 23/10/2026, 11:30 a. m. (Colombia)

- **Pregunta realizada:** Obtener el enlace de este chat y añadirlo debajo de «Pregunta realizada» en el registro de bitácora.
- **Enlace para este chat:** (https://chatgpt.com/s/cx_6adb8b9cbf9c81918b7ae2226e9808c7)
- **Resumen breve de la respuesta:** Se generó el enlace compartido y se incorporó a la estructura del registro.
- **Archivos o conceptos involucrados:** `bitacora.md`, enlace compartido del chat.
- **Estado:** Enlace generado. No se modificaron archivos.
---

## Consultas de soporte — Camilo Molina
### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > ya tengo Firebase configurado  para el login. ¿Puedes revisar providers.ts y AuthProvider y explicarme qué falta para que el formulario inicie sesión correctamente? Por ahora no cambies nada.
- **Resumen de la respuesta:**
  El formulario ya estaba conectado con Firebase y TypeScript no mostraba errores. Faltaba probar una cuenta real. También apareció una actualización repetida del usuario.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Porque se repite logica?
- **Resumen de la respuesta:**
  login y onAuthStateChanged guardaban el mismo usuario. La recomendación fue dejar esa tarea solamente en onAuthStateChanged.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Explicame con un ejemplo
- **Resumen de la respuesta:**
  El ejemplo mostró que login puede enviar las credenciales mientras el observador guarda la sesión, sin repetir el mismo dispatch.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > entiendo, entonces haz el cambio
- **Resumen de la respuesta:**
  Se modificó AuthProvider.tsx: se quitaron los dispatch repetidos de login y logout. onAuthStateChanged quedó encargado de actualizar la sesión, y login de enviar las credenciales y manejar los errores. TypeScript y lint pasaron. Falta probar una cuenta real.
- **Archivos creados/modificados:**
  - `src/auth/contexts/AuthProvider.tsx` (modificado: se eliminó la actualización duplicada de la sesión).

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > En providers tengo AuthResult y AuthErrorResult. qu pongo para `errorMessage?`
- **Resumen de la respuesta:**
  Cuando el resultado es correcto se usa errorMessage?: never. Cuando falla se exige un mensaje de tipo string. ok permite distinguir los dos resultados.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > cuando consulte el never es para valores que nunca van a ocurrir cierto es la mejor opcion para este proyecto
- **Resumen de la respuesta:**
  never evita que un resultado exitoso lleve un mensaje de error. Es una restricción de TypeScript para no mezclar las dos respuestas.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Qué casos puedo poner en el switch de errores del login ya que  const user = result.user;
  >     const { uid, displayName, photoURL } = user;
  >     return {
  >       ok: true,
  >       uid, email, displayName, photoURL
  >     };
  >   } catch (error : any) {
  >     return {
  >       ok: false,
  >       errorMessage: error.message
  >     }
  >   }tengo estas opciones para poner o cual es la mejor y que puedo añaidr  pues cómo manejo credenciales incorrectas, muchos intentos y problemas de conexión?
- **Resumen de la respuesta:**
  La recomendación fue revisar error.code y mostrar mensajes para credenciales incorrectas, correo inválido, muchos intentos, problemas de conexión y cuentas inhabilitadas.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > que son error.code
- **Resumen de la respuesta:**
  error.code identifica el fallo de Firebase. error.message contiene la explicación técnica. El switch usa el código para escoger un mensaje.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > y de donde saco esos case?
- **Resumen de la respuesta:**
  Los case salen de la documentación de Firebase. Deben coincidir con el código que devuelve el error.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > cómo evito enviar el formulario varias veces mientras responde Firebase?
- **Resumen de la respuesta:**
  submitting permite bloquear el botón mientras responde Firebase. try/finally permite volver a habilitarlo al terminar la solicitud.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/auth/pages/LoginPage.tsx`.

---

### [2026-10-25]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Cómo construyo el usuario y qué debe llevar el payload del dispatch y que caso llevo al reducer?
- **Resumen de la respuesta:**
  El usuario se arma con los datos de Firebase. El dispatch lleva type y payload, y el reducer responde a login, logout y error.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

## Página de inicio — Camilo Molina

### [2026-10-28] - Datos de ejemplo

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > Voy a hacer la pagina de inicio de EXEX y necesito que en home.ts pongas los datos mokeados de diferentes usuarios, bastantes para que la pagina se vea nutrida
- **Resumen de la respuesta:** Se agregaron 32 publicaciones de ejemplo reutilizando los 13 usuarios existentes. Se usaron fechas fijas y pasaron compilación y lint. Estas publicaciones se retiraron después para dejar el feed a cargo de Brahian.
- **Archivos creados/modificados:**
  - `src/data/home.ts` (modificado en esa consulta; las publicaciones se retiraron después).

---

### [2026-10-28] - Diseño del inicio

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > y podrias ayudarme acomando bien las tarjetas y el contenido del usuario para que se vea un poco parecido a la red social x y que mas tengo que añadir, si la caréta hometilen es necesaria y para que sirve?
- **Resumen de la respuesta:** Se acomodó el inicio con perfil y navegación a la izquierda, publicaciones en el centro y usuarios de ejemplo a la derecha. Se explicó que HomeTimeline mostraba las publicaciones y HomePage organizaba la pantalla. Compilación y lint pasaron.
- **Archivos creados/modificados:**
  - `src/exex/pages/HomePage.tsx` (modificado).
  - `src/exex/pages/HomePage.css` (creado).
  - `src/exex/components/HomeTimeline.tsx` (modificado en esa consulta; eliminado después).

---

### [2026-10-28] - Cómo se muestran las publicaciones

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > hometimeline organiza los datos de que manera dame ejemplos
- **Resumen de la respuesta:** HomeTimeline recorría las publicaciones con map y mostraba el nombre, usuario, fecha y mensaje. No las ordenaba: respetaba el orden del arreglo. También se explicó para qué sirven key, el identificador y la fecha.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicó `src/exex/components/HomeTimeline.tsx` y `src/data/home.ts`.

---

### [2026-10-28] - Tarjetas de usuarios

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > repito eso para los usuarios pero dime que hace cada linea
- **Resumen de la respuesta:** Se mostró un ejemplo para recorrer mockUsers con map y se explicó cada línea: importar los usuarios, identificar cada tarjeta con key y mostrar la inicial, el nombre y el @usuario. El ejemplo no se agregó como un componente nuevo.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicaron `src/data/users.ts` y las clases de `src/exex/pages/HomePage.css`.

---

### [2026-10-28] - Datos mockeados y reales

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > pero esto es por los datos mokeados cierto
- **Resumen de la respuesta:** La lista usa usuarios de ejemplo, pero map también sirve con usuarios obtenidos de Firebase. Después cambia el origen de los datos y se puede mantener la forma de mostrarlos.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/data/users.ts`.

---

### [2026-10-28] - Usuarios y tarjetas del inicio

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > Cuantos usuarios pusiste mokiados y como hiciste las tarjetas, viene de hometimeline
- **Resumen de la respuesta:** Los 13 usuarios ya existían. HomeTimeline mostraba las publicaciones y HomePage mostraba cinco usuarios en el panel derecho, excluyendo al usuario actual. Los estilos de las tarjetas estaban en HomePage.css.
- **Archivos creados/modificados:**
  - Sin cambios. Se revisaron `src/data/users.ts`, `src/data/home.ts`, `src/exex/components/HomeTimeline.tsx`, `src/exex/pages/HomePage.tsx` y `src/exex/pages/HomePage.css`.

---

### [2026-10-28] - Espacio para el feed del compañero

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > mi compañero es que hace el feed y los tweets, ya borre esa parte porque habia hecho algunos, verifica si ya los borre
- **Resumen de la respuesta:** Se confirmó que HomeTimeline y las 32 publicaciones de ejemplo ya no estaban. En Inicio quedó el espacio para integrar el feed de Brahian. El formulario para publicar y sus rutas seguían disponibles.
- **Archivos creados/modificados:**
  - Sin cambios en esta consulta. Se verificaron `src/exex/pages/HomePage.tsx`, `src/data/home.ts` y las referencias al componente eliminado.

---

### [2026-10-28] - Revisión de la página de inicio

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Agregar usuarios mock a home.ts](https://chatgpt.com/s/cx_6ae2a0c989c88191b21866f01c79d945)
- **Mensaje enviado (Prompt):**
  > Ya tengo lo necesario de pagina de inicio
- **Resumen de la respuesta:** Se repasó lo que tiene la interfaz: perfil, contadores, navegación, acceso para publicar, usuarios de ejemplo y espacio para el feed. La integración del feed y los datos reales quedaron pendientes.
- **Archivos creados/modificados:**
  - Sin cambios.

---
