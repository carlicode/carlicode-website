# Carli Code Website

Portfolio personal que muestra mi trabajo en Inteligencia Artificial, experiencia profesional, proyectos y hobbies.

## 🚀 Características

- **Diseño Moderno**: Interface de usuario limpia y atractiva utilizando Tailwind CSS
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia interactiva
- **Completamente Responsive**: Adaptado para funcionar perfectamente en dispositivos móviles y de escritorio
- **Optimizado para SEO**: Incluye metadatos y etiquetas semánticas para mejor indexación
- **Efectos Visuales**: Partículas animadas en el fondo para un diseño dinámico

## 📋 Secciones

- **Inicio**: Presentación y visión general
- **Proyectos**: Proyectos destacados en IA y desarrollo
- **Experiencia**: Trayectoria profesional, certificaciones y habilidades técnicas
- **Hobbies**: Galerías de imágenes de Public Speaking, Viajes y Tiro con Arco
- **Comunidad**: Participación en comunidades tecnológicas
- **Contacto**: Información para conectar conmigo

## 🛠️ Tecnologías

- [React 19](https://reactjs.org/) - Framework de JavaScript para interfaces de usuario
- [React Router DOM](https://reactrouter.com/) - Enrutamiento para aplicaciones React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [Framer Motion](https://www.framer.com/motion/) - Librería de animaciones para React
- [Vite](https://vitejs.dev/) - Build tool rápido y moderno
- [React Helmet Async](https://github.com/staylor/react-helmet-async) - Gestión de metadatos del documento
- [TSParticles](https://particles.js.org/) - Efectos de partículas
- [Embla Carousel](https://www.embla-carousel.com/) - Carrusel de imágenes
- [Lucide React](https://lucide.dev/) - Iconos vectoriales

## 🧰 Instalación y Uso

### Prerrequisitos
- [Node.js](https://nodejs.org/) 20 o superior (probado con 22)
- npm

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/carlicode/carlicode-website.git
cd carlicode-website
```

2. **Instalar dependencias**
```bash
npm ci --legacy-peer-deps
```
(`--legacy-peer-deps` hace falta mientras `react-helmet-async` no declare soporte para React 19.)

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```
El proyecto estará disponible en: `http://localhost:5173` (o `http://localhost:5174` si el puerto 5173 está ocupado)

### Scripts disponibles

- **`npm run dev`** - Inicia el servidor de desarrollo con hot reload
- **`npm run build`** - Construye la aplicación para producción
- **`npm run preview`** - Previsualiza el build de producción localmente
- **`npm run lint`** - Ejecuta ESLint para encontrar problemas en el código
- **`npm run test:infra`** - Prueba la CloudFront Function (no necesita AWS)
- **`npm run deploy`** - Publica el sitio en AWS (necesita credenciales)

### Construcción para producción

```bash
# Construir para producción
npm run build

# Previsualizar el build
npm run preview
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
carlicode-website/
├── src/
│   ├── components/     # Componentes React reutilizables
│   ├── pages/         # Páginas de la aplicación
│   ├── data/          # Datos y contenido estático
│   ├── assets/        # Recursos (imágenes, iconos, etc.)
│   └── main.jsx       # Punto de entrada de la aplicación
├── public/            # Archivos públicos
├── docs/              # Build viejo de GitHub Pages (ya no se usa)
├── infra/aws/         # Infraestructura AWS: scripts, función CloudFront y exports
├── scripts/           # deploy.sh
└── package.json       # Dependencias y scripts
```

## 🌐 Despliegue

El sitio vive en AWS: S3 privado + CloudFront + Route 53 (`carlicode.com` y `www.carlicode.com`). El detalle está en [`infra/aws/README.md`](infra/aws/README.md).

Para publicar, con AWS CLI v2 configurado:

```bash
npm run deploy
```

Esto hace `npm run build`, sube `dist/` a S3 (los assets con caché de un año porque llevan hash, `index.html` sin caché) e invalida CloudFront.

## 🤝 Contribución

1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con 🐍, ☕ y mucho 💜
