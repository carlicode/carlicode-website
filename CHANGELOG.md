# Changelog - Rediseño Minimalista

## 2026-05-27 - Rediseño Completo Minimalista

### ✨ Nuevo Diseño
- **Paleta de colores**: Blanco, Negro y Rosa (#FF006E)
- **Tipografía**: Inter (reemplaza Space Grotesk y JetBrains Mono)
- **Estilo**: Minimalista y profesional
- **Transiciones**: Suaves y elegantes (0.3s y 0.6s)

### 🎨 Componentes Nuevos
Todos en `/components/minimal/`:

1. **HandwritingHero** - Hero con efecto de escritura a mano "CARLI CODE"
2. **MinimalNav** - Navegación fija con blur, responsive
3. **AboutSection** - Sobre mí con estadísticas
4. **ProjectsGrid** - Grid de proyectos con hover effects
5. **NewsletterSection** - Suscripción a newsletter
6. **ContactSection** - Formulario de contacto (Formspree)
7. **MinimalFooter** - Footer con redes sociales
8. **InfluencerStats** - Estadísticas de redes sociales
9. **PricingTable** - Precios de colaboraciones
10. **CVPage** - CV interactivo completo
11. **MinimalLanding** - Landing principal

### 📄 Páginas Nuevas/Actualizadas

#### `/[lang]` - Landing Principal
- Hero con animación de escritura
- Sección sobre mí con stats (145K TikTok, 5+ años exp, 20+ charlas, 15+ proyectos)
- Grid de proyectos destacados
- Newsletter signup
- Formulario de contacto
- Footer completo

#### `/[lang]/proyectos` - Proyectos
- Listado completo de proyectos
- Grid responsivo
- Tags de tecnologías
- Hover effects

#### `/[lang]/contenido` - Influencer
- Estadísticas de redes sociales
- Demographics de TikTok (género, edad, países)
- Tabla de precios (TikTok, Instagram Reels, Instagram Stories)
- CTA para colaboraciones

#### `/[lang]/cv` - Curriculum
- Header con info de contacto
- Botón de descarga PDF
- Experiencia laboral detallada
- Skills técnicas categorizadas
- Logros y premios
- Comunidades
- Certificaciones con links

#### `/[lang]/blog` - Blog
- Página "Coming Soon"
- CTA a redes sociales
- Preparado para sistema de blog futuro

### 🎭 Animaciones
- **Handwriting effect**: Letras aparecen una por una simulando escritura a mano
- **Fade in**: Elementos aparecen suavemente al cargar
- **Hover effects**: Cards y botones con transiciones elegantes
- **Scroll indicator**: Animación de scroll en hero

### 🔧 Cambios Técnicos
- Nuevo CSS system en `minimal.css`
- Actualizado `globals.css` para diseño minimalista
- Actualizado `layout.tsx` con fuente Inter
- Todas las páginas usan el nuevo sistema de componentes
- PDF del CV copiado a `/public/` para descarga

### 📱 Responsive
- Mobile-first design
- Menú hamburguesa en mobile
- Grids responsivos
- Breakpoint principal: 768px

### 🌐 i18n
- Soporte completo ES/EN
- Metadata SEO por idioma
- Textos dinámicos en todos los componentes

### 📊 Datos
Todo viene de `portfolio.json`:
- Personal info y contacto
- Proyectos técnicos
- Experiencia y skills
- Certificaciones
- Stats de influencer
- Precios de colaboraciones
- Analytics de TikTok

### 🚀 Listo para Producción
- ✅ Servidor dev corriendo en http://localhost:3000
- ✅ Todas las páginas funcionales
- ✅ Responsive design
- ✅ SEO optimizado
- ✅ Formularios integrados (Formspree)
- ✅ Descarga de CV en PDF

### 📝 Próximas Mejoras
- [ ] Sistema de blog con MDX
- [ ] Backend para newsletter
- [ ] Google Analytics
- [ ] Optimización de imágenes
- [ ] Tests E2E
