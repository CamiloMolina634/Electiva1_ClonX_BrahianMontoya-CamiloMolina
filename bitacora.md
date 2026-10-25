# Bitácora de Uso de Inteligencia Artificial

## Registro de Interacciones

### [2026-10-21 20:00]
- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > Quiero entender desde cero cómo configurar Bootstrap en mi proyecto de React, siguiendo el ejemplo de clase bloc_app. Explícame un paso a la vez y dime qué hace cada cambio
- **Resumen de la respuesta:**
  Bootstrap ya estaba conectado en index.html. La respuesta explicó los enlaces de carga y cómo usar sus clases en React.
- **Archivos creados/modificados:**
  - Ninguno. Se revisaron `index.html`, `src/main.tsx` y `package.json`, junto con los archivos del ejemplo `bloc_app`.

---

### [2026-10-21 20:10]
- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > Muéstrame cómo quedaría con Bootstrap 5.3.8, usando los enlaces en index.html.
- **Resumen de la respuesta:**
  El ejemplo mostró dónde van los enlaces del CSS y del JavaScript de Bootstrap 5.3.8. Esa configuración ya estaba en el proyecto.
- **Archivos creados/modificados:**
  - Ninguno. Archivo relacionado: `index.html` (configuración existente, explicada en la respuesta).

---

### [2026-10-21 20:12]
- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Qué tendría que quitar si antes lo instalé con npm y lo importé en main.tsx?
- **Resumen de la respuesta:**
  Para usar los enlaces basta con quitar los imports de Bootstrap y desinstalar el paquete. El import de index.css se conserva. En esta consulta no se hicieron cambios.
- **Archivos creados/modificados:**
  - Ninguno. Archivos relacionados: `src/main.tsx`, `package.json` y `package-lock.json`. Los pasos fueron explicados; no se ejecutaron en esta conversación.

---

### [2026-10-21 20:15]
- **Herramienta / Modelo:** Codex 
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Cómo dejo index.css básico, sin personalizar todavía los botones ni los formularios?
- **Resumen de la respuesta:**
  La propuesta fue dejar el ancho mínimo del body y quitar las reglas de la pantalla inicial si ya no se necesitan. Los botones y campos usarían las clases de Bootstrap.
- **Archivos creados/modificados:**
  - Ninguno. Se revisó `src/index.css` y se propuso una simplificación, sin modificarlo.

---

### [2026-10-21 20:30]
- **Herramienta / Modelo:** Codex 
- **Enlace a la conversación:** [Configura Bootstrap en React](https://chatgpt.com/s/cx_6ad968288d008191bd046d2aed47719b)
- **Mensaje enviado (Prompt):**
  > ¿Cómo compruebo que quedó funcionando?
- **Resumen de la respuesta:**
  La prueba propuesta fue mostrar un botón con btn btn-primary y abrir la aplicación con npm run dev. Eso permite revisar el CSS. La prueba no se ejecutó en ese chat.
- **Archivos creados/modificados:**
  - Ninguno. Se sugirió una prueba en `src/ExexApp.tsx`, sin aplicarla.

---

### [2026-10-25 12:40]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > ya tengo Firebase configurado  para el login. ¿Puedes revisar providers.ts y AuthProvider y explicarme qué falta para que el formulario inicie sesión correctamente? Por ahora no cambies nada.
- **Resumen de la respuesta:**
  El formulario ya estaba conectado con Firebase y TypeScript no mostraba errores. Faltaba probar una cuenta real. También apareció una actualización repetida del usuario.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

### [2026-10-25 12:41]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Porque se repite logica?
- **Resumen de la respuesta:**
  login y onAuthStateChanged guardaban el mismo usuario. La recomendación fue dejar esa tarea solamente en onAuthStateChanged.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

### [2026-10-25 12:41]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Explicame con un ejemplo
- **Resumen de la respuesta:**
  El ejemplo mostró que login puede enviar las credenciales mientras el observador guarda la sesión, sin repetir el mismo dispatch.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---

### [2026-10-25 12:42]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > entiendo, entonces haz el cambio
- **Resumen de la respuesta:**
  Se modificó AuthProvider.tsx: se quitaron los dispatch repetidos de login y logout. onAuthStateChanged quedó encargado de actualizar la sesión, y login de enviar las credenciales y manejar los errores. TypeScript y lint pasaron. Falta probar una cuenta real.
- **Archivos creados/modificados:**
  - `src/auth/contexts/AuthProvider.tsx` (modificado: se eliminó la actualización duplicada de la sesión).

---

### [2026-10-25 12:43]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > En providers tengo AuthResult y AuthErrorResult. qu pongo para `errorMessage?`
- **Resumen de la respuesta:**
  Cuando el resultado es correcto se usa errorMessage?: never. Cuando falla se exige un mensaje de tipo string. ok permite distinguir los dos resultados.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25 12:46]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > cuando consulte el never es para valores que nunca van a ocurrir cierto es la mejor opcion para este proyecto
- **Resumen de la respuesta:**
  never evita que un resultado exitoso lleve un mensaje de error. Es una restricción de TypeScript para no mezclar las dos respuestas.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25 12:52]

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

### [2026-10-25 12:53]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > que son error.code
- **Resumen de la respuesta:**
  error.code identifica el fallo de Firebase. error.message contiene la explicación técnica. El switch usa el código para escoger un mensaje.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25 13:07]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > y de donde saco esos case?
- **Resumen de la respuesta:**
  Los case salen de la documentación de Firebase. Deben coincidir con el código que devuelve el error.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/firebase/providers.ts`.

---

### [2026-10-25 13:10]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > cómo evito enviar el formulario varias veces mientras responde Firebase?
- **Resumen de la respuesta:**
  submitting permite bloquear el botón mientras responde Firebase. try/finally permite volver a habilitarlo al terminar la solicitud.
- **Archivos creados/modificados:**
  - Sin cambios. Archivo relacionado: `src/auth/pages/LoginPage.tsx`.

---

### [2026-10-25 13:11]

- **Herramienta / Modelo:** Codex
- **Enlace a la conversación:** [Revisa el login con Firebase](https://chatgpt.com/s/cx_6ade46d1fbcc819182c32983e8233092)
- **Mensaje enviado (Prompt):**
  > Cómo construyo el usuario y qué debe llevar el payload del dispatch y que caso llevo al reducer?
- **Resumen de la respuesta:**
  El usuario se arma con los datos de Firebase. El dispatch lleva type y payload, y el reducer responde a login, logout y error.
- **Archivos creados/modificados:**
  - Sin cambios. Archivos relacionados: `src/auth/contexts/AuthProvider.tsx` y `src/auth/reducers/authReducer.ts`.

---
