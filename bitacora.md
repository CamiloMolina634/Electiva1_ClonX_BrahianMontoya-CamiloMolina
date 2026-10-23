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
