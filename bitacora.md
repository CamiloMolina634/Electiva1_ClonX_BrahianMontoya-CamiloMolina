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

## Consultas de soporte — Brahian Montoya Obando — 23 al 27 de octubre de 2026

Todas las horas corresponden a Colombia (UTC-5). No hubo consultas registradas el 24 de octubre.

Las pruebas y aprobaciones reportadas por el usuario no equivalen a comprobaciones realizadas por el asistente.

### 23/10/2026

#### Consulta 1 — 10:56 a. m.

- **Pregunta realizada:** Solicitud de apoyo para comprender conceptos y resolver dudas o errores de EXEX.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se estableció el alcance de apoyo: explicaciones breves, identificadores y comentarios en inglés y registros de acciones reales.
- **Archivos o conceptos involucrados:** React, TypeScript, Vite, React Router v6, datos mock, tweets, seguidores, seguidos y feed.
- **Estado:** Alcance establecido. No se revisaron ni modificaron archivos.

#### Consulta 2 — 11:03 a. m.

- **Pregunta realizada:** Completar la descripción de un pull request sobre publicación simulada de tweets.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se redactó la descripción de RF-04 con validación de mensajes, confirmación, limpieza del formulario, autor, fecha, contenido, estado durante la navegación y usuario provisional. Se dejó pendiente la revisión de Camilo.
- **Archivos o conceptos involucrados:** RF-04, publicación de tweets, datos mock, formulario y descripción del pull request.
- **Estado:** Texto preparado. Las funcionalidades, pruebas y revisión del trabajo de Camilo fueron reportadas por el usuario. No se ejecutaron pruebas ni se creó el pull request.

#### Consulta 3 — 11:30 a. m.

- **Pregunta realizada:** Obtener el enlace del chat y añadirlo debajo de Pregunta realizada en la bitácora.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se generó un enlace compartido y se incorporó al formato del registro.
- **Archivos o conceptos involucrados:** bitacora.md y enlaces compartidos.
- **Estado:** Enlace generado. No se modificaron archivos.

### 25/10/2026

#### Consulta 4 — 1:20 p. m.

- **Pregunta realizada:** Mi componente UserListItem recibe una propiedad user de tipo User. ¿Qué son las props y cómo funciona ({ user }: UserListItemProps)?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó cómo un componente padre pasa datos a un hijo mediante props y cómo se combinan la desestructuración y el tipado de TypeScript, con un ejemplo sencillo.
- **Archivos o conceptos involucrados:** UserListItem, User, UserListItemProps, props, desestructuración y tipos.
- **Estado:** Ejemplo explicativo propuesto. No se revisaron ni modificaron archivos ni se ejecutó código.

#### Consulta 5 — 1:25 p. m.

- **Pregunta realizada:** ¿Por qué conviene crear un componente reutilizable para cada usuario y cómo se utiliza dentro de una lista con map?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó cómo reutilizar la presentación de cada usuario y generar una lista con map, pasando la prop user y asignando una key estable. Se mostró un enlace al perfil mediante Link.
- **Archivos o conceptos involucrados:** UserListItem, UserList, props, map, key, Link, ul y li.
- **Estado:** Ejemplo propuesto con una ruta de perfil supuesta. No se modificaron archivos ni se ejecutó código.

#### Consulta 6 — 1:36 p. m.

- **Pregunta realizada:** ¿Cómo combinar mockUsers y mockFollows para obtener únicamente los usuarios que sigue Brahian, excluyendo a quienes solo lo siguen a él?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso filtrar las relaciones donde Brahian es el seguidor, extraer los identificadores seguidos y buscar los usuarios correspondientes mediante filter, map y Set.
- **Archivos o conceptos involucrados:** mockUsers, mockFollows, filter, map, Set, followerId, followingId y UserListItem.
- **Estado:** Ejemplo propuesto con nombres de campos y datos supuestos. No se revisaron archivos ni se ejecutó código.

#### Consulta 7 — 1:36 p. m. (13:36:53)

- **Pregunta realizada:** Se indicó que el enlace compartido también debe actualizarse en cada consulta.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se generó un nuevo enlace que incluía la explicación sobre mockUsers y mockFollows, y se actualizó el registro de esa consulta.
- **Archivos o conceptos involucrados:** Bitácora y enlaces compartidos del chat.
- **Estado:** Enlace generado y registro actualizado en el chat. No se modificaron archivos.

#### Consulta 8 — 1:39 p. m.

- **Pregunta realizada:** ¿Ana queda excluida de mis seguidos porque, aunque ella me sigue, yo no la sigo?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se confirmó que el seguimiento es direccional. Ana pertenece a los seguidores, pero solo aparecerá en los seguidos si Brahian también la sigue.
- **Archivos o conceptos involucrados:** Seguidores, seguidos, followerId y followingId.
- **Estado:** Aclaración conceptual realizada. No se modificaron archivos ni se ejecutaron pruebas.

#### Consulta 9 — 2:01 p. m.

- **Pregunta realizada:** ¿Cómo mantener la correspondencia de los seguimientos al sustituir identificadores mock por UID de Firebase? ¿Basta con renombrar id a uid?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que deben coincidir los valores de los identificadores, no solo los nombres de los campos. Se propuso mantener id en el modelo y asignarle el UID real, actualizando también las referencias en las relaciones.
- **Archivos o conceptos involucrados:** User, datos mock, Firebase Authentication, uid, followerId, followingId y correspondencia de identificadores.
- **Estado:** Documentación oficial consultada y solución propuesta. No se modificaron archivos ni se comprobó una integración con Firebase.

- **Fuente consultada:** [Documentación de Firebase](https://firebase.google.com/docs/auth/web/manage-users#get_a_users_profile)
#### Consulta 10 — 2:40 p. m.

- **Pregunta realizada:** Ayuda para completar la descripción de un pull request sobre la pantalla de usuarios seguidos.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se redactó la descripción con datos mock, compatibilidad del modelo de Camilo, orden alfabético por nombre completo, paginación de diez usuarios, botones desactivados en los extremos, enlaces hacia los tweets de cada usuario y diseño adaptable. Se incorporaron las pruebas y la aprobación de Camilo reportadas por el usuario.
- **Archivos o conceptos involucrados:** Usuarios seguidos, modelo de usuario, componentes reutilizables, paginación, diseño adaptable y descripción del pull request.
- **Estado:** Texto preparado para copiar. Las pruebas y la aprobación fueron reportadas por el usuario. No se modificaron archivos, no se ejecutaron pruebas ni se creó el pull request.

#### Consulta 11 — 2:43 p. m.

- **Pregunta realizada:** Se precisó que el requisito de la pantalla de usuarios seguidos es RF-05.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se actualizó la tarea relacionada de la descripción a RF-05: Usuarios seguidos.
- **Archivos o conceptos involucrados:** RF-05 y descripción del pull request.
- **Estado:** Texto actualizado en el chat. No se modificaron archivos ni el pull request.

#### Consulta 12 — 5:32 p. m.

- **Pregunta realizada:** Transcribir los valores de configuración de Firebase de una imagen para copiarlos y pegarlos.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se transcribieron las variables de entorno mostradas en la imagen para colocarlas en .env.local.
- **Archivos o conceptos involucrados:** Imagen adjunta, .env.example, .env.local y configuración de Firebase.
- **Estado:** Transcripción realizada. No se crearon archivos ni se comprobó la conexión con Firebase. En esa consulta quedó pendiente generar el enlace; se incorpora aquí el enlace actualizado.

#### Consulta 13 — 5:47 p. m.

- **Pregunta realizada:** ¿Es importante conservar .env.example si es una plantilla? ¿Por qué Git la muestra como eliminada después de renombrarla?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que debe conservarse la plantilla compartida y crear una copia llamada .env.local. Se propuso restaurar la plantilla con git restore .env.example y comprobar que la configuración local esté excluida mediante .gitignore.
- **Archivos o conceptos involucrados:** .env.example, .env.local, .gitignore, renombrado de archivos y git restore.
- **Estado:** Explicación y comandos propuestos. No se inspeccionó el repositorio ni se ejecutaron cambios.

#### Consulta 14 — 5:51 p. m.

- **Pregunta realizada:** Reunir todas las bitácoras de hoy en un archivo TXT con sus enlaces.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se recopilaron las consultas reales del 25 de octubre de 2026 y se preparó un archivo de texto con sus horas, preguntas, resúmenes, conceptos, estados y enlace actualizado del chat.
- **Archivos o conceptos involucrados:** bitacoras_2026-10-25.txt, registros de consultas y enlaces compartidos.
- **Estado:** Archivo TXT generado. No se modificó el código de EXEX ni se ejecutaron pruebas del proyecto.

### 26/10/2026

#### Consulta 15 — 2:34 p. m.

- **Pregunta realizada:** Si dos usuarios se siguen entre sí, ¿se necesitan dos relaciones en mockFollows o basta con una?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que el modelo con followerId y followingId requiere dos relaciones, una por cada dirección. Cada usuario puede dejar de seguir al otro de forma independiente.
- **Archivos o conceptos involucrados:** mockFollows, followerId, followingId y seguimiento direccional.
- **Estado:** Explicación y ejemplo propuestos. No se modificaron archivos ni se ejecutaron pruebas.

#### Consulta 16 — 2:39 p. m.

- **Pregunta realizada:** ¿Qué problemas causa guardar dos veces la misma relación de seguimiento? ¿El usuario aparecería repetido?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que la repetición visual depende de cómo se construya la lista. Con Set y el filtro de mockUsers, el usuario no se repite si existe una sola vez en mockUsers. Los duplicados pueden alterar los contadores y la eliminación del seguimiento. Se propuso comprobar la pareja de identificadores con some antes de agregarla.
- **Archivos o conceptos involucrados:** mockFollows, mockUsers, Set, some, relaciones duplicadas y conteo de seguidos.
- **Estado:** Explicación y ejemplo propuestos. No se modificaron archivos ni se ejecutaron pruebas.

#### Consulta 17 — 2:44 p. m. (14:44:05)

- **Pregunta realizada:** ¿Para qué comprobar currents.includes(userId) si el botón ya se desactiva cuando sigo al usuario?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que desactivar el botón evita interacciones desde la interfaz, mientras que comprobar el estado dentro de una actualización funcional evita agregar identificadores duplicados ante llamadas repetidas. Si la lista contiene objetos, corresponde utilizar some.
- **Archivos o conceptos involucrados:** includes, some, estado de React, actualización funcional y prevención de duplicados.
- **Estado:** Explicación y ejemplo propuestos suponiendo una lista de identificadores. No se revisaron archivos ni se ejecutaron pruebas.

#### Consulta 18 — 2:44 p. m. (14:44:44)

- **Pregunta realizada:** ¿Se conserva el seguimiento al pulsar seguir y cambiar a la segunda página?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que el seguimiento se conserva si su estado permanece montado al cambiar de página. Si se guarda únicamente en una fila que se desmonta, puede perderse. Para conservarlo entre pantallas, se propuso mantenerlo en un estado compartido que permanezca montado, por ejemplo mediante contexto.
- **Archivos o conceptos involucrados:** UserListItem, followingIds, paginación, estado de React, desmontaje y contexto.
- **Estado:** Explicación condicional. No se revisó el código ni se comprobó la persistencia en la aplicación.

#### Consulta 19 — 3:26 p. m.

- **Pregunta realizada:** Actualizar el enlace de la conversación para incluirlo en la bitácora.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se generó un enlace actualizado que incluía las explicaciones sobre seguimiento mutuo, relaciones duplicadas, validación con includes y conservación del estado al cambiar de página.
- **Archivos o conceptos involucrados:** bitacora.md, mockFollows, includes, estado de React y paginación.
- **Estado:** Enlace generado y registro preparado para copiar. No se modificaron archivos ni se ejecutaron pruebas.

#### Consulta 20 — 3:27 p. m.

- **Pregunta realizada:** Reunir las bitácoras de hoy en un archivo descargable.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se recopilaron las cinco consultas anteriores del 26 de octubre y esta solicitud de descarga en un archivo TXT, con horas de Colombia, preguntas, enlaces, resúmenes, conceptos y estados.
- **Archivos o conceptos involucrados:** bitacoras_2026-10-26.txt y enlaces compartidos de la conversación.
- **Estado:** Archivo TXT generado. No se modificó el código de EXEX ni se ejecutaron pruebas del proyecto.

#### Consulta 21 — 3:34 p. m.

- **Pregunta realizada:** Completar la descripción de un pull request sobre la pantalla de seguidores.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se redactó la descripción con orden alfabético, diez usuarios por página, componentes reutilizables, botón Seguir/Siguiendo y estado temporal que persiste entre páginas y se reinicia al salir o recargar. Los enlaces a tweets y la aprobación de Camilo quedaron pendientes.
- **Archivos o conceptos involucrados:** Seguidores, paginación, componentes reutilizables, estado temporal y diseño adaptable.
- **Estado:** Texto preparado. Las funcionalidades y pruebas fueron reportadas por el usuario. No se modificaron archivos, no se ejecutaron pruebas ni se creó el pull request.

#### Consulta 22 — 3:36 p. m.

- **Pregunta realizada:** Precisar que el requisito de la pantalla de seguidores es RF-06.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se actualizó la tarea relacionada a RF-06: Seguidores.
- **Archivos o conceptos involucrados:** RF-06 y descripción del pull request.
- **Estado:** Texto actualizado en el chat. No se modificaron archivos ni el pull request.

### 27/10/2026

#### Consulta 23 — 12:35 p. m.

- **Pregunta realizada:** ¿Conviene pasar el tweet y el autor por separado a una tarjeta o buscar al autor dentro del componente?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso buscar al autor en la lista y pasar tweet y author como props para mantener la tarjeta reutilizable e independiente de los mocks.
- **Archivos o conceptos involucrados:** TweetCard, Tweet, User, props, map, find y authorId.
- **Estado:** Diseño y ejemplo propuestos con campos supuestos. No se revisaron archivos ni se ejecutó código.

#### Consulta 24 — 12:37 p. m.

- **Pregunta realizada:** ¿En qué formato guardar las fechas para mostrar fecha y hora y ordenar las publicaciones de más reciente a más antigua?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso guardar createdAt como texto ISO 8601 en UTC, ordenar con getTime y formatear al mostrar con Intl.DateTimeFormat.
- **Archivos o conceptos involucrados:** createdAt, ISO 8601, UTC, Date, toISOString, getTime, sort e Intl.DateTimeFormat.
- **Estado:** Explicación y ejemplos propuestos para datos mock. No se modificaron archivos ni se ejecutó código.

#### Consulta 25 — 12:38 p. m.

- **Pregunta realizada:** ¿Debo configurar la zona horaria para que las fechas concuerden con Colombia?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que pueden guardarse en UTC y mostrarse en hora de Colombia con timeZone: America/Bogota, sin restar horas manualmente.
- **Archivos o conceptos involucrados:** createdAt, UTC, toISOString, Intl.DateTimeFormat, es-CO y America/Bogota.
- **Estado:** Explicación y ejemplo propuestos. No se modificaron archivos ni se ejecutó código.

#### Consulta 26 — 12:40 p. m.

- **Pregunta realizada:** ¿Conviene usar es-CO y permitir que el navegador utilice la zona horaria local de quien abre la página?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se aclaró que es-CO define el formato y omitir timeZone permite usar la zona horaria del navegador. Se mantienen los datos en UTC y el orden cronológico no cambia.
- **Archivos o conceptos involucrados:** Intl.DateTimeFormat, es-CO, timeZone, UTC y createdAt.
- **Estado:** Explicación y ejemplo propuestos. No se modificaron archivos ni se ejecutó código.

#### Consulta 27 — 12:45 p. m.

- **Pregunta realizada:** ¿Cómo relacionar el identificador de la URL con los autores para mostrar únicamente los tweets del usuario visitado?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso leer userId mediante useParams, buscar al usuario y filtrar las publicaciones cuyo authorId coincida con su identificador. Se distinguió el usuario visitado del conectado.
- **Archivos o conceptos involucrados:** React Router v6, useParams, rutas dinámicas, mockUsers, mockTweets, find, filter y TweetCard.
- **Estado:** Ejemplo propuesto con rutas y campos supuestos. No se revisaron archivos ni se ejecutó código.

#### Consulta 28 — 12:46 p. m.

- **Pregunta realizada:** ¿Qué diferencia hay entre obtener el identificador con useParams y pasarlo como una prop?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que useParams obtiene datos de la URL y una prop recibe datos del padre. Se propuso leer el identificador en la pantalla y pasarlo a una lista reutilizable.
- **Archivos o conceptos involucrados:** useParams, props, rutas dinámicas, UserTweetsPage y UserTweetList.
- **Estado:** Explicación y ejemplo propuestos. No se modificaron archivos ni se ejecutó código.

#### Consulta 29 — 12:48 p. m.

- **Pregunta realizada:** ¿Qué mostrar si el identificador de la URL no corresponde a ningún usuario?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso mostrar Usuario no encontrado con un enlace al inicio y distinguirlo de un usuario válido sin publicaciones.
- **Archivos o conceptos involucrados:** useParams, find, renderizado condicional, Link, UserTweetsPage y UserTweetList.
- **Estado:** Explicación y ejemplo propuestos suponiendo que / es la ruta de inicio. No se modificaron archivos ni se ejecutó código.

#### Consulta 30 — 12:49 p. m.

- **Pregunta realizada:** ¿Cómo hacer que un tweet nuevo aparezca en la lista del usuario sin recargar?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso compartir el estado entre el formulario y la lista, actualizarlo con setTweets y calcular el filtro y el orden a partir de ese estado.
- **Archivos o conceptos involucrados:** useState, estado compartido, contexto, props, filter, sort y UserTweetList.
- **Estado:** Explicación y ejemplo propuestos con campos supuestos. No se modificaron archivos ni se comprobó el comportamiento en la aplicación.

#### Consulta 31 — 12:51 p. m.

- **Pregunta realizada:** ¿En qué orden filtrar, ordenar y paginar para mostrar tweets del más reciente al más antiguo, con diez por página?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó el orden filtrar, ordenar y paginar mediante filter, sort y slice, calculando el total de páginas sobre los tweets del usuario.
- **Archivos o conceptos involucrados:** authorId, createdAt, filter, sort, slice, currentPage, pageSize y totalPages.
- **Estado:** Explicación y ejemplo propuestos. No se modificaron archivos ni se ejecutó código.

#### Consulta 32 — 12:59 p. m.

- **Pregunta realizada:** ¿El uso de sort podría modificar los tweets guardados en el contexto?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se explicó que sort modifica el arreglo sobre el que se ejecuta. Copiarlo antes o utilizar el arreglo nuevo de filter evita alterar el orden del arreglo del contexto; los objetos siguen siendo compartidos.
- **Archivos o conceptos involucrados:** Contexto, estado de React, sort, filter, copia superficial e inmutabilidad.
- **Estado:** Explicación y ejemplos propuestos. No se modificaron archivos ni se ejecutó código.

#### Consulta 33 — 1:00 p. m.

- **Pregunta realizada:** ¿Cómo evitar que un perfil abra en la segunda página al cambiar de usuario?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso asignar key={userId} al componente con la paginación para reiniciar su estado local en la página 1 al cambiar de usuario.
- **Archivos o conceptos involucrados:** UserTweetsPage, UserTweetList, useParams, key, useState y paginación.
- **Estado:** Solución propuesta suponiendo que la paginación pertenece a UserTweetList. No se modificaron archivos ni se ejecutó código.

#### Consulta 34 — 1:07 p. m.

- **Pregunta realizada:** ¿Cómo calcular seguidores y seguidos usando relaciones mock y permitir seguir a un usuario desde su perfil?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso calcular contadores con filter, comprobar el seguimiento con some y agregar la relación mediante estado compartido, evitando duplicados y seguirse a uno mismo.
- **Archivos o conceptos involucrados:** mockFollows, follows, setFollows, followerId, followingId, estado compartido y perfil.
- **Estado:** Explicación y ejemplos propuestos suponiendo relaciones únicas y acceso al estado compartido. No se modificaron archivos ni se ejecutó código.

#### Consulta 35 — 1:11 p. m.

- **Pregunta realizada:** ¿Cómo evitar contar dos veces a alguien si hay relaciones de seguimiento duplicadas?
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se propuso filtrar las relaciones, extraer los identificadores y contarlos con Set.size para obtener seguidores y seguidos únicos.
- **Archivos o conceptos involucrados:** follows, filter, map, Set, size, followerId y followingId.
- **Estado:** Explicación y ejemplos propuestos. No se modificaron archivos ni se ejecutó código.

#### Consulta 36 — 1:35 p. m.

- **Pregunta realizada:** Completar la descripción de un pull request sobre el perfil de usuario y la consulta de sus tweets.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se redactó la descripción con orden cronológico, paginación, fechas en es-CO y zona horaria del navegador, contadores, seguimiento local, mensajes informativos, enlaces y actualización sin recargar. El identificador del requisito quedó pendiente.
- **Archivos o conceptos involucrados:** Perfil de usuario, tarjeta de tweets, paginación, es-CO, seguidores, seguidos y estado compartido.
- **Estado:** Texto preparado para copiar. Las funcionalidades y pruebas fueron reportadas por el usuario. La revisión de Camilo está pendiente. No se modificaron archivos, no se ejecutaron pruebas ni se creó el pull request.

#### Consulta 37 — 1:42 p. m.

- **Pregunta realizada:** Solicitar toda la bitácora de la conversación en un archivo descargable.
- **Enlace para este chat:** [Dar soporte al clon EXEX](https://chatgpt.com/s/cx_6ae0f0ac52cc819182b29f00c22a360a)
- **Resumen breve de la respuesta:** Se reunieron los registros del 23, 25, 26 y 27 de octubre, incluyendo las entradas posteriores a las descargas anteriores, con un enlace actualizado del chat.
- **Archivos o conceptos involucrados:** bitacora_completa_2026-10-23_al_2026-10-27.txt, registros de consultas y enlaces compartidos.
- **Estado:** Archivo TXT completo generado. Se conservan las diferencias entre ejemplos propuestos, acciones realizadas y pruebas reportadas por el usuario. No se modificó el código de EXEX ni se ejecutaron pruebas del proyecto.

---

## Registro con Firebase — Camilo Molina

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > que diferencia hay en firebase de la base de datos de prueba y la de produccion?
- **Resumen de la respuesta:**
  Los modos cambian las reglas iniciales: prueba permite acceso temporal y producción empieza bloqueado. La base es real en ambos casos y los datos no se borran al vencer el permiso.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicó la configuración de Firestore en la consola.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > y que reglas tengo que crear en produccion?
- **Resumen de la respuesta:**
  Se propusieron reglas para users y usernames que permiten crear el perfil propio y reservar el nombre de usuario. Se revisó el código, pero no se modificaron archivos ni se publicaron o probaron las reglas.
- **Archivos creados/modificados:**
  - Sin cambios. Se revisó `src/firebase/providers.ts`; las reglas se mostraron en la respuesta.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > y como serian la de prueba?
- **Resumen de la respuesta:**
  Se mostró un ejemplo de reglas abiertas hasta una fecha. Al vencer se bloquea el acceso desde la aplicación; los documentos siguen guardados.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicó la configuración de Firestore en la consola.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > pero yo puedo modificar esas fechas?
- **Resumen de la respuesta:**
  La fecha de las reglas se puede cambiar y publicar de nuevo. Mientras el acceso esté abierto, cualquiera puede leer, modificar o borrar documentos.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicó la configuración de Firestore en la consola.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > Estas seguro que los 30 dias no se me borra
- **Resumen de la respuesta:**
  Se verificó que el plazo de prueba solo afecta los permisos. Los documentos permanecen en Firestore y pueden volver a utilizarse al publicar reglas que permitan el acceso.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicó la configuración de Firestore en la consola.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > puedo empezar con pruebas y despues pasar a produccion?
- **Resumen de la respuesta:**
  Se puede pasar de prueba a producción cambiando las reglas, sin crear otra base ni cambiar la conexión del proyecto.
- **Archivos creados/modificados:**
  - Sin cambios. Se explicó la configuración de Firestore en la consola.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > ya cree la base de datos, creo la coleccion manual o desde el codigo mejor?
- **Resumen de la respuesta:**
  El registro ya guarda users/{uid} y usernames/{username}. Firestore crea las colecciones al escribir el primer documento; no hace falta crearlas manualmente.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > dame un ejemplo
- **Resumen de la respuesta:**
  El ejemplo mostró cómo quedan el perfil y la reserva del usuario después del registro. El UID viene de Authentication y la contraseña no se guarda en Firestore.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > y como hago para que se guarden juntas, con transaction?
- **Resumen de la respuesta:**
  runTransaction guarda el perfil y la reserva juntos, o no guarda ninguno. Authentication queda fuera de esa transacción; el código intenta eliminar la cuenta si falla el guardado del perfil.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-28]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Explicar bases de Firebase](https://chatgpt.com/s/cx_6ae2879a834c8191aac11c97e0362a48)
- **Mensaje enviado (Prompt):**
  > de donde sale uid
- **Resumen de la respuesta:**
  Firebase Authentication genera el UID al crear la cuenta. Ese identificador se usa para el documento del perfil en users y se conserva cuando la cuenta vuelve a iniciar sesión.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---
