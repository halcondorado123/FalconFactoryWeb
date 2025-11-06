Falcon Software Factory® 🚀
Una página web corporativa moderna y profesional desarrollada para mostrar los servicios, valores y equipo de Falcon Software Factory. El proyecto está construido con tecnologías web estándar y desplegado en Firebase Hosting.
Mostrar imagen
📋 Tabla de Contenidos

Características
Tecnologías Utilizadas
Estructura del Proyecto
Instalación y Configuración
Uso
Despliegue
Funcionalidades Principales
Contribuir
Licencia
Contacto

✨ Características ✨

Diseño Responsivo: Adaptable a todos los dispositivos (móvil, tablet, desktop)
Componentes Modulares: Navbar y Footer reutilizables mediante JavaScript
Formulario de Contacto: Integración con EmailJS para envío de correos electrónicos
Carruseles Interactivos: Visualización de clientes y equipo de trabajo
Animaciones Suaves: Efectos visuales modernos con CSS
Optimización SEO: Estructura semántica y meta tags optimizados
Alto Rendimiento: Carga rápida y optimizada de recursos
Validación de Formularios: Validación en tiempo real con Bootstrap

🛠️ Tecnologías Utilizadas

*** FRONTEND

HTML5: Estructura semántica y accesible
CSS3: Estilos personalizados y animaciones
JavaScript (ES6+): Lógica de interacción y modularización
Bootstrap 5.3: Framework CSS para diseño responsivo

*** Librerías y Servicios

EmailJS: Servicio de envío de correos electrónicos desde el cliente
SweetAlert2: Alertas personalizadas y elegantes
Font Awesome: Iconografía vectorial
Bootstrap Icons: Iconos adicionales para la interfaz
Firebase Hosting: Plataforma de alojamiento web

*** Herramientas de Desarrollo

Firebase CLI: Despliegue y gestión del hosting
Git: Control de versiones

📁 Estructura del Proyecto 📁

FALCONFACTORYWEB/
│
├── assets/                    # Recursos estáticos
│   ├── Img(0-7).png          # Logos de clientes
│
├── css/                       # Hojas de estilo
│   ├── acerca.css            # Estilos página de contacto
│   ├── nosotros.css          # Estilos página nosotros
│   ├── servicios.css         # Estilos página servicios
│   └── styles.css            # Estilos globales
│
├── pages/                     # Páginas HTML
│   ├── contacto.html         # Página de contacto
│   ├── nosotros.html         # Página acerca de nosotros
│   └── servicios.html        # Página de servicios
│
├── script/                    # Scripts JavaScript
│   ├── contact.js            # Lógica del formulario de contacto
│   ├── main.js               # Scripts principales
│   └── shared.js             # Componentes compartidos (Navbar, Footer)
│
├── shared/                    # Componentes HTML reutilizables
│   ├── footer.html           # Footer compartido
│   ├── head.html             # Head compartido
│   └── header.html           # Header/Navbar compartido
│
├── .firebase/                 # Configuración de Firebase
├── .firebaserc               # Configuración de proyectos Firebase
├── .gitignore                # Archivos ignorados por Git
├── 404.html                  # Página de error 404
├── firebase.json             # Configuración de Firebase Hosting
├── firebaserc                # Alias de proyectos Firebase
├── index.html                # Página principal
└── README.md                 # Documentación del proyecto

🚀 Instalación y Configuración
Prerrequisitos

Node.js (v14 o superior)
npm o yarn
Cuenta de Firebase
Cuenta de EmailJS

Pasos de Instalación

Clonar el repositorio

* Utilizando Git Bash: 
git clone https://github.com/tuusuario/falcon-factory-web.git

* Instalar Firebase CLI (si no está instalado) - Este proceso puede realizarse mediante la terminal de Visual Studio Code
npm install -g firebase-tools
Iniciar sesión en Firebase

* Configurar EmailJS
Crea una cuenta en EmailJS
Obtén tu Service ID, Template ID y Public Key
Actualiza las credenciales en script/contact.js:

    - javascriptemailjs.init("TU_PUBLIC_KEY");
    - emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)

Configurar Firebase

firebase init hosting
Selecciona las siguientes opciones:

Use an existing project
Public directory: . (directorio actual)
Configure as single-page app: No
Set up automatic builds: No

💻 Uso
Desarrollo Local
Para trabajar localmente con Firebase Hosting:
bashfirebase serve
Esto iniciará un servidor local en http://localhost:5000
Estructura de Componentes Compartidos
El proyecto utiliza JavaScript para cargar componentes reutilizables:
Navbar (header.html)
html<div id="nav-menu"></div>
Footer (footer.html)
html<div id="footer-container"></div>
Estos componentes se cargan automáticamente mediante shared.js.
Formulario de Contacto
El formulario utiliza EmailJS para enviar correos electrónicos:

El usuario completa el formulario en pages/contacto.html
Al enviar, contact.js valida los datos
EmailJS envía el correo al destinatario configurado
SweetAlert2 muestra una confirmación visual

🌐 Despliegue
Desplegar en Firebase Hosting

Construir el proyecto (si es necesario)

bash# No requiere build ya que es HTML estático

Desplegar a Firebase

bashfirebase deploy

Desplegar solo el hosting

bashfirebase deploy --only hosting

Ver el sitio desplegado

bashfirebase open hosting:site
```

### URL de Producción

Una vez desplegado, tu sitio estará disponible en:
```
https://tu-proyecto.web.app
```
o
```
https://tu-proyecto.firebaseapp.com
🎯 Funcionalidades Principales
1. Página Principal (index.html)

Hero section con llamados a la acción
Estadísticas de la empresa
Vista previa de servicios
Carrusel de clientes
Testimonios de clientes

2. Página de Servicios (servicios.html)

Catálogo completo de servicios
Descripción detallada de cada servicio
Tecnologías utilizadas
Proceso de trabajo paso a paso

3. Página Nosotros (nosotros.html)

Historia de la empresa
Misión y visión
Valores corporativos
Carrusel de equipo de trabajo

4. Página de Contacto (contacto.html)

Formulario de contacto funcional
Información de contacto
Horarios de atención
Enlaces a redes sociales
Integración con EmailJS

🔧 Configuración de EmailJS
Template de Email Recomendado
htmlNombre: {{user_name}}
Email: {{user_email}}
Mensaje: {{message}}
Variables Disponibles

user_name: Nombre del usuario
user_email: Correo electrónico del usuario
message: Mensaje del formulario

📱 Características Responsivas
El sitio está optimizado para:

Móviles: < 768px
Tablets: 768px - 1024px
Desktop: > 1024px

Utiliza breakpoints de Bootstrap para garantizar una experiencia óptima en todos los dispositivos.
🎨 Personalización
Cambiar Colores Principales
Edita css/styles.css y busca las variables CSS:
css:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --success-color: #198754;
  /* ... más colores */
}
Modificar Contenido

Textos: Edita directamente los archivos HTML
Imágenes: Reemplaza los archivos en /assets
Estilos: Modifica los archivos CSS correspondientes

🔒 Seguridad

Validación de formularios: Implementada en el cliente y servidor (EmailJS)
Protección contra spam: Configurada en EmailJS
HTTPS: Proporcionado automáticamente por Firebase Hosting
Sanitización de inputs: Implementada en JavaScript

📊 Optimización y Rendimiento

Lazy Loading: Imágenes cargadas bajo demanda
Minificación: CSS y JS optimizados para producción
CDN: Recursos estáticos servidos desde CDN de Bootstrap y Font Awesome
Caché: Configurado en firebase.json

🐛 Solución de Problemas
El formulario no envía correos

Verifica las credenciales de EmailJS
Revisa la consola del navegador para errores
Confirma que el template de EmailJS esté configurado correctamente

Los componentes compartidos no se cargan

Asegúrate de que shared.js esté incluido
Verifica las rutas relativas de los archivos
Revisa la consola para errores de CORS

Errores de despliegue en Firebase

Verifica que firebase.json esté configurado correctamente
Asegúrate de estar autenticado: firebase login
Confirma que el proyecto Firebase esté seleccionado

🤝 Contribuir
Las contribuciones son bienvenidas. Para contribuir:

Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request

📝 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
📞 Contacto
Falcon Software Factory®

Email: falconfelipedeveloper@gmail.com
Ubicación: Bogotá D.C., Colombia
Horario: Lun - Vie: 8:00 AM - 5:00 PM

Equipo de Desarrollo
Jhonattan Halcón Casallas Felipe

Email: jhonattan.casallas@cun.edu.co
Teléfono: +57 320 958 5852
LinkedIn: jhonattanhalconcasallasfelipe
GitHub: halcondorado123

Juan Sebastian Muñoz Ordoñez

Email: juan.munozo@cun.edu.co
Teléfono: +57 315 767 3005


Desarrollado con ❤️ por Falcon Software Factory®
Transformando ideas en experiencias digitales impactantes
