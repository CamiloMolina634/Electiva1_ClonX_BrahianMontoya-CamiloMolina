# Bitácora de Uso de Inteligencia Artificial

## Registro de Interacciones

### [2026-10-21 20:00] - 

- **Herramienta / Modelo:** Codex / Modelo no identificado en el historial consultado.
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > Quiero entender desde cero cómo configurar Bootstrap en mi proyecto de React, siguiendo el ejemplo de clase bloc_app. Explícame un paso a la vez y dime qué hace cada cambio
- **Resumen de la respuesta:**
  Se revisaron EXEX y bloc_app. Se explicó que Bootstrap ya estaba conectado mediante una CDN en index.html y para qué sirven href, rel, integrity y crossorigin. También se explicó el uso de className para aplicar sus estilos.
- **Archivos creados/modificados:**
  - Ninguno. Se revisaron `index.html`, `src/main.tsx` y `package.json`, junto con los archivos del ejemplo `bloc_app`.

---

### [2026-10-21 20:10] - 

- **Herramienta / Modelo:** Codex / Modelo no identificado en el historial consultado.
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b) (enlace interno de Codex; no es un enlace público compartido).
- **Mensaje enviado (Prompt):**
  > Muéstrame cómo quedaría con Bootstrap 5.3.8, usando los enlaces en index.html.
- **Resumen de la respuesta:**
  Se mostró un ejemplo completo de index.html con el CSS de Bootstrap y su archivo JavaScript bundle. Se explicó la función de cada enlace y la necesidad de conexión a Internet. La configuración mostrada ya existía en el proyecto.
- **Archivos creados/modificados:**
  - Ninguno. Archivo relacionado: `index.html` (configuración existente, explicada en la respuesta).

--

### [2026-10-21 20:12] - 

- **Herramienta / Modelo:** Codex / Modelo no identificado en el historial consultado.
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Qué tendría que quitar si antes lo instalé con npm y lo importé en main.tsx?
- **Resumen de la respuesta:**
  Se explicó cómo evitar una carga duplicada: retirar los imports de Bootstrap y ejecutar npm uninstall bootstrap, conservando el import de index.css. Se aclaró que los archivos revisados ya usaban solamente los enlaces de index.html.
- **Archivos creados/modificados:**
  - Ninguno. Archivos relacionados: `src/main.tsx`, `package.json` y `package-lock.json`. Los pasos fueron explicados; no se ejecutaron en esta conversación.

---

### [2026-10-21 20:15] - 

- **Herramienta / Modelo:** Codex 
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Cómo dejo index.css básico, sin personalizar todavía los botones ni los formularios?
- **Resumen de la respuesta:**
  Se revisó index.css y se propuso conservar únicamente el ancho mínimo del body si se desea retirar también el diseño inicial. Se explicó que project-start y project-mark controlan la presentación inicial, y que botones y campos utilizan clases de Bootstrap.
- **Archivos creados/modificados:**
  - Ninguno. Se revisó `src/index.css` y se propuso una simplificación, sin modificarlo.

---

### [2026-10-21 20:30] - 

- **Herramienta / Modelo:** Codex 
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Cómo compruebo que quedó funcionando?
- **Resumen de la respuesta:**
  Se propuso agregar temporalmente un botón con las clases btn y btn-primary, dentro de un contenedor con container y py-4, y ejecutar npm run dev. Se explicó cómo reconocer el resultado y que esa prueba comprueba el CSS, no los componentes JavaScript. La conversación no registra la ejecución de esta prueba.
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

