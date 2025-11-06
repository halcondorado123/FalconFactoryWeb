<div align="center">

# 🦅 Falcon Software Factory®

### *Transformando ideas en experiencias digitales impactantes*

[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/?hl=es-419)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integration-blue?style=for-the-badge&logo=gmail)](https://dashboard.emailjs.com/sign-in)


---

### 🔗 Enlaces Importantes

[![🌐 Sitio Web](https://img.shields.io/badge/🌐_Sitio_Web-Visitar-blue?style=for-the-badge)](https://falcon-factorysoftware.web.app/index.html)
[![📁 Google Drive](https://img.shields.io/badge/📁_Recursos-Google_Drive-yellow?style=for-the-badge&logo=googledrive)](https://drive.google.com/drive/folders/1XRjSFOqITZ41iaaBTP0WzKS6_G8Omk3R?usp=sharing)

</div>

## 🎯 Sobre el Proyecto

**Falcon Software Factory®** es una plataforma web corporativa diseñada para mostrar servicios tecnológicos de clase mundial. Con un diseño moderno, responsivo y optimizado, ofrece una experiencia de usuario excepcional en todos los dispositivos.

### ✨ Highlights

```
🎨 Diseño Moderno y Atractivo    📱 100% Responsivo y Mobile-First         🔒 Seguro y Confiable
📧 Formulario de Contacto Real    🎭 Componentes Modulares
🚀 Desplegado en Firebase         ✅ Validación en Tiempo Real
```

---

## 📋 Tabla de Contenidos

- [🎯 Sobre el Proyecto](#-sobre-el-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación Rápida](#-instalación-rápida)
- [💻 Uso y Desarrollo](#-uso-y-desarrollo)
- [🌐 Despliegue](#-despliegue)
- [🎨 Personalización](#-personalización)
- [🔧 Configuración EmailJS](#-configuración-emailjs)
- [🐛 Solución de Problemas](#-solución-de-problemas)
- [🤝 Contribuir](#-contribuir)
- [📞 Contacto](#-contacto)

---

## ✨ Características Principales

<table>
<tr>
<td width="50%">

### 🎨 Diseño y UX
- ✅ **Diseño Responsivo** - Perfecto en móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Transiciones CSS modernas
- ✅ **Carruseles Interactivos** - Para clientes y equipo
- ✅ **UI/UX Optimizada** - Experiencia de usuario intuitiva

</td>
<td width="50%">

### ⚡ Rendimiento
- ✅ **Carga Rápida** - < 2 segundos tiempo de carga
- ✅ **Cache Optimizado** - Configuración Firebase

</td>
</tr>
<tr>
<td width="50%">

### 🔧 Funcionalidad
- ✅ **Componentes Modulares** - Navbar/Footer reutilizables
- ✅ **Formulario Funcional** - EmailJS integrado
- ✅ **Validación en Vivo** - Feedback instantáneo
- ✅ **SweetAlert2** - Notificaciones elegantes

</td>
<td width="50%">

### 🔒 Seguridad
- ✅ **HTTPS Automático** - Vía Firebase Hosting
- ✅ **Protección Anti-spam** - EmailJS configurado

</td>
</tr>
</table>

---

## 🛠️ Stack Tecnológico

<div align="center">

### Frontend Core
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### Servicios y Librerías
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-00A3E0?style=for-the-badge&logo=gmail&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-7367F0?style=for-the-badge)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

### Herramientas
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Firebase CLI](https://img.shields.io/badge/Firebase_CLI-FFA611?style=for-the-badge&logo=firebase&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

</div>

---

## 📁 Estructura del Proyecto

```bash
FALCONFACTORYWEB/
│
├── 📂 assets/                    # Recursos estáticos
│   └── 🖼️  Img(0-7).png         # Logos de clientes
│
├── 📂 css/                       # Hojas de estilo
│   ├── 🎨 acerca.css            # Estilos página contacto
│   ├── 🎨 nosotros.css          # Estilos página nosotros
│   ├── 🎨 servicios.css         # Estilos página servicios
│   └── 🎨 styles.css            # Estilos globales
│
├── 📂 pages/                     # Páginas del sitio
│   ├── 📄 contacto.html         # Formulario de contacto
│   ├── 📄 nosotros.html         # Sobre la empresa
│   └── 📄 servicios.html        # Catálogo de servicios
│
├── 📂 script/                    # Lógica JavaScript
│   ├── ⚡ contact.js            # EmailJS integration
│   ├── ⚡ main.js               # Scripts principales
│   └── ⚡ shared.js             # Componentes compartidos
│
├── 📂 shared/                    # Componentes reutilizables
│   ├── 🔧 footer.html           # Footer global
│   ├── 🔧 head.html             # Meta tags compartidos
│   └── 🔧 header.html           # Navbar global
│
├── 📂 .firebase/                 # Config Firebase (generado)
├── ⚙️  .firebaserc              # Proyectos Firebase
├── 🚫 .gitignore                # Archivos ignorados
├── ❌ 404.html                  # Página de error
├── ⚙️  firebase.json            # Configuración hosting
├── 🏠 index.html                # Página principal
└── 📖 README.md                 # Esta documentación
```

---

## 🚀 Instalación Rápida

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Git](https://git-scm.com/)
- Una cuenta en [Firebase](https://firebase.google.com/)
- Una cuenta en [EmailJS](https://www.emailjs.com/)

### Pasos de Instalación

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/halcondorado123/falcon-factory-web.git
cd falcon-factory-web

# 2️⃣ Instalar Firebase CLI globalmente
npm install -g firebase-tools

# 3️⃣ Autenticarse en Firebase
firebase login

# 4️⃣ Inicializar el proyecto
firebase init hosting
```

Durante la inicialización, configura:
- ✅ **Use an existing project** → Selecciona tu proyecto
- ✅ **Public directory** → `.` (directorio actual)
- ✅ **Configure as SPA** → `No`
- ✅ **Automatic builds** → `No`

### Configurar EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email (Gmail, Outlook, etc.)
3. Crea un template de email
4. Obtén tus credenciales:
   - 🔑 **Service ID**
   - 🔑 **Template ID**  
   - 🔑 **Public Key**

5. Actualiza `script/contact.js`:

```javascript
// Inicializar EmailJS con tu Public Key
emailjs.init("TU_PUBLIC_KEY_AQUI");

// En la función de envío
emailjs.sendForm(
  'TU_SERVICE_ID',      // Service ID
  'TU_TEMPLATE_ID',     // Template ID
  this
)
```

---

## 💻 Uso y Desarrollo

### Servidor Local

```bash
# Iniciar servidor de desarrollo
firebase serve

# El sitio estará disponible en:
# 🌐 http://localhost:5000
```

### Estructura de Componentes

El proyecto utiliza **componentes modulares** cargados dinámicamente:

#### 🧩 Navbar (Header)
```html
<!-- En cualquier página HTML -->
<div id="nav-menu"></div>
```

#### 🧩 Footer
```html
<!-- En cualquier página HTML -->
<div id="footer-container"></div>
```

Estos componentes se cargan automáticamente mediante `shared.js`, permitiendo:
- ✅ Mantener consistencia en todas las páginas
- ✅ Actualizar el navbar/footer en un solo lugar
- ✅ Reducir duplicación de código

### Flujo del Formulario de Contacto

1. **Usuario llena formulario** → Ingresa nombre, email y mensaje
2. **Validación en vivo** → Bootstrap valida campos en tiempo real
3. **¿Válido?** 
   - ❌ No → Muestra errores específicos
   - ✅ Sí → Continúa al paso 4
4. **Enviar con EmailJS** → Transmite datos al servidor
5. **Confirmación SweetAlert2** → Notificación visual elegante
6. **Email recibido** → Mensaje llega a la bandeja configurada

---

## 🌐 Despliegue

### Desplegar en Firebase Hosting

```bash
# 1️⃣ Desplegar todo el proyecto
firebase deploy

# 2️⃣ Desplegar solo hosting (más rápido)
firebase deploy --only hosting

# 3️⃣ Ver el sitio desplegado
firebase open hosting:site
```

### URLs de Producción

Después del despliegue, tu sitio estará disponible en:

```
🌍 https://tu-proyecto-id.web.app
🌍 https://tu-proyecto-id.firebaseapp.com
```

### Configuración de Dominio Personalizado

```bash
# Agregar dominio personalizado
firebase hosting:channel:deploy preview-channel

# Configurar dominio en Firebase Console:
# 1. Hosting → Add custom domain
# 2. Agregar registros DNS proporcionados
# 3. Esperar verificación (24-48h)
```

---


### Personalizar Contenido

| Elemento | Ubicación | Descripción |
|----------|-----------|-------------|
| 📝 **Textos** | `*.html` | Edita directamente en archivos HTML |
| 🖼️ **Imágenes** | `/assets` | Reemplaza con mismo nombre de archivo |
| 🎨 **Estilos** | `/css/*.css` | Modifica hojas de estilo por página |
| ⚡ **Scripts** | `/script/*.js` | Actualiza lógica JavaScript |
| 🧩 **Componentes** | `/shared/*.html` | Edita navbar/footer compartidos |

### Agregar Nueva Página

```bash
# 1️⃣ Crear archivo HTML en /pages
touch pages/nueva-pagina.html

# 2️⃣ Agregar estructura base
# 3️⃣ Incluir componentes compartidos
<div id="nav-menu"></div>
<!-- Tu contenido aquí -->
<div id="footer-container"></div>

# 4️⃣ Agregar link en navbar (shared/header.html)
```

---

## 🔧 Configuración EmailJS

### 1️⃣ Template de Email Recomendado

En tu EmailJS dashboard, crea un template con este formato:

```html
<h2>Nuevo Mensaje de Contacto</h2>

<p><strong>De:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

<hr>
<small>Enviado desde Falcon Software Factory®</small>
```

### 2️⃣ Variables Disponibles

| Variable | Descripción | Origen |
|----------|-------------|--------|
| `{{user_name}}` | Nombre del usuario | Campo `name` del formulario |
| `{{user_email}}` | Email del usuario | Campo `email` del formulario |
| `{{message}}` | Contenido del mensaje | Campo `message` del formulario |

### 3️⃣ Configuración de Auto-reply (Opcional)

Puedes configurar un email de respuesta automática:

```html
<h2>{{user_name}}!</h2>

<p>{{Email}}p>

<blockquote>{{message}}</blockquote>
```

---

## 🐛 Solución de Problemas

<details>
<summary><b>❌ El formulario no envía correos</b></summary>

**Posibles causas:**

1. **Credenciales incorrectas**
   ```javascript
   // Verifica en contact.js
   emailjs.init("TU_PUBLIC_KEY"); // ¿Es correcta?
   ```

2. **Template ID incorrecto**
   - Verifica en EmailJS dashboard
   - Copia el ID exacto del template

3. **Servicio de email no configurado**
   - Revisa la consola del navegador (`F12`)
   - Verifica estado del servicio en EmailJS

4. **Límite de envíos alcanzado**
   - Revisa tu plan de EmailJS
   - Considera upgrading si es necesario

**Solución:**
```bash
# Abrir consola del navegador y verificar errores
F12 → Console → Buscar errores en rojo
```
</details>

<details>
<summary><b>❌ Componentes compartidos no cargan</b></summary>

**Posibles causas:**

1. **Script no incluido**
   ```html
   <!-- Verifica que esté al final del body -->
   <script src="../script/shared.js"></script>
   ```

2. **Rutas incorrectas**
   ```javascript
   // En shared.js, verifica las rutas
   fetch('../shared/header.html') // ¿Es correcta?
   ```

3. **Errores CORS (servidor local)**
   ```bash
   # Usa firebase serve en lugar de abrir HTML directo
   firebase serve
   ```

**Solución:**
- Abre DevTools → Network
- Verifica que los archivos HTML se carguen (200 OK)
- Revisa Console por errores de ruta
</details>

<details>
<summary><b>❌ Error al desplegar en Firebase</b></summary>

**Posibles causas:**

1. **No autenticado**
   ```bash
   firebase login
   firebase login --reauth # Si persiste el error
   ```

2. **Proyecto no seleccionado**
   ```bash
   firebase use --add
   # Selecciona tu proyecto de la lista
   ```

3. **firebase.json mal configurado**
   ```json
   {
     "hosting": {
       "public": ".",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ]
     }
   }
   ```

4. **Permisos insuficientes**
   - Verifica en Firebase Console
   - Asegúrate de ser Owner o Editor del proyecto

**Solución:**
```bash
# Reiniciar configuración
firebase logout
firebase login
firebase init hosting
firebase deploy
```
</details>

<details>
<summary><b>❌ Imágenes no cargan correctamente</b></summary>

**Posibles causas:**

1. **Rutas incorrectas**
   ```html
   <!-- Desde index.html -->
   <img src="./assets/Img(0).png">
   
   <!-- Desde pages/ -->
   <img src="../assets/Img(0).png">
   ```

2. **Archivos no subidos a Firebase**
   ```bash
   # Verifica que /assets esté en el public directory
   firebase deploy --only hosting
   ```

**Solución:**
- Usa rutas relativas correctas
- Verifica extensiones (.png vs .PNG)
- Comprueba que las imágenes existan en el servidor
</details>

<details>
<summary><b>❌ Estilos no se aplican</b></summary>

**Causas comunes:**

1. **CSS no enlazado**
   ```html
   <!-- Verifica en <head> -->
   <link rel="stylesheet" href="../css/styles.css">
   ```

2. **Caché del navegador**
   ```bash
   # Limpiar caché
   Ctrl + Shift + R  (Windows/Linux)
   Cmd + Shift + R   (Mac)
   ```

3. **Especificidad CSS**
   ```css
   /* Usa !important solo como último recurso */
   .mi-clase {
     color: red !important;
   }
   ```

**Solución:**
- Inspecciona elemento con DevTools
- Verifica qué estilos se aplican
- Revisa la consola por errores 404
</details>

---

## 📱 Responsive Design

El sitio está optimizado para todos los dispositivos:

| Dispositivo | Breakpoint | Características |
|-------------|-----------|-----------------|
| 📱 **Móviles** | < 768px | Menú hamburguesa, columnas apiladas |
| 📱 **Tablets** | 768px - 1024px | Layout híbrido, 2 columnas |
| 💻 **Desktop** | > 1024px | Layout completo, múltiples columnas |
| 🖥️ **Large Desktop** | > 1440px | Contenido centrado, max-width |


## ⚡ Performance

### Optimizaciones Implementadas

```
✅ Lazy Loading de imágenes
✅ Minificación de CSS/JS
✅ CDN para librerías externas
✅ Compresión GZIP (Firebase)
✅ Caché de recursos estáticos
✅ Imágenes optimizadas WebP
✅ Fonts preloading
✅ DNS prefetch para CDN
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Aquí está cómo puedes ayudar:

### Proceso de Contribución

1. **Fork** el proyecto
2. **Crea** una rama para tu feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** tus cambios
   ```bash
   git commit -m 'Add: Amazing new feature'
   ```
4. **Push** a la rama
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abre** un Pull Request

### Guía de Commits

Usa mensajes claros y descriptivos:

```bash
# ✅ Buenos commits
git commit -m "Add: Contact form validation"
git commit -m "Fix: Navbar responsive issue on mobile"
git commit -m "Update: README with deployment instructions"
git commit -m "Remove: Unused CSS classes"

# ❌ Malos commits
git commit -m "changes"
git commit -m "fix stuff"
git commit -m "update"
```

### Reportar Bugs

Usa los **Issues** de GitHub con el siguiente formato:

```markdown
**Descripción del bug:**
[Descripción clara y concisa]

**Pasos para reproducir:**
1. Ir a '...'
2. Click en '...'
3. Ver error

**Comportamiento esperado:**
[Qué debería pasar]

**Screenshots:**
[Si aplica]

**Entorno:**
- OS: [Windows/Mac/Linux]
- Navegador: [Chrome, Firefox, etc.]
- Versión: [X.X]
```

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2025 Falcon Software Factory®

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Contacto

<div align="center">

### 🦅 **Falcon Software Factory®**

*Construimos el futuro digital*

[![Email](https://img.shields.io/badge/Email-falconfelipedeveloper@gmail.com-red?style=for-the-badge&logo=gmail)](mailto:falconfelipedeveloper@gmail.com)
[![Schedule](https://img.shields.io/badge/Horario-Lun--Vie_8:00--17:00-blue?style=for-the-badge&logo=clock)](/)

</div>

---

### 👥 Equipo de Desarrollo

<table align="center">
<tr>
<td align="center" width="50%">

#### **Jhonattan Halcón Casallas Felipe**
*CEO & Co-Fundador*

[![Email](https://img.shields.io/badge/-jhonattan.casallas@cun.edu.co-red?style=flat&logo=gmail)](mailto:jhonattan.casallas@cun.edu.co)
[![Phone](https://img.shields.io/badge/-+57_320_958_5852-green?style=flat&logo=whatsapp)](tel:+573209585852)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/jhonattanhalconcasallasfelipe/)
[![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github)](https://github.com/halcondorado123)

**Especialidades:**
- 🔷 Desarrollo .NET
- 🎨 Infraestructura y Diseño
- 🖥️ Control de Servidores
- 🏗️ Arquitectura de Software

</td>
<td align="center" width="50%">

#### **Juan Sebastian Muñoz Ordoñez**
*CTO & Co-Fundador*

[![Email](https://img.shields.io/badge/-juan.munozo@cun.edu.co-red?style=flat&logo=gmail)](mailto:juan.munozo@cun.edu.co)
[![Phone](https://img.shields.io/badge/-+57_315_767_3005-green?style=flat&logo=whatsapp)](tel:+573157673005)

**Especialidades:**
- 🟢 Node.js & C#
- 🐘 SQL Server
- ☁️ AWS Cloud
- 🔒 Ciberseguridad
- 🏗️ HTML, CSS, JavaScript

</td>
</tr>
</table>

---

<div align="center">

### 🌟 ¿Te gustó el proyecto?

Si este proyecto te fue útil, considera:

[![Follow](https://img.shields.io/github/followers/halcondorado123?style=social)](https://github.com/halcondorado123)

---

### 💼 ¿Necesitas un proyecto similar?

**¡Contáctanos!** Transformamos tus ideas en experiencias digitales impactantes.

[📧 Solicitar Cotización](mailto:falconfelipedeveloper@gmail.com) • [🌐 Visitar Sitio](https://falcon-factorysoftware.web.app/index.html) • [📱 WhatsApp](https://wa.me/573209585852)

---

**Desarrollado con ❤️ por Falcon Software Factory®**

*"La mejor manera de predecir el futuro es crearlo"*

---

### 📊 Estadísticas del Proyecto
