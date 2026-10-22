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

