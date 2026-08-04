# Diseño Minimalista - Carli Code

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Principal**: Blanco (#FFFFFF)
- **Texto**: Negro (#000000)
- **Acento**: Rosa (#FF006E)
- **Grises**: Escala de 50 a 900

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800

### Transiciones
- **Smooth**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Slow**: 0.6s cubic-bezier(0.4, 0, 0.2, 1)

## 📐 Componentes

### Core Components (`/components/minimal/`)

1. **HandwritingHero.tsx**
   - Efecto de escritura a mano para "CARLI CODE"
   - Animación letra por letra
   - Hero minimalista con CTA

2. **MinimalNav.tsx**
   - Navegación fija con backdrop blur
   - Responsive con menú móvil
   - Selector de idioma integrado

3. **AboutSection.tsx**
   - Sección sobre mí con estadísticas
   - Grid responsivo de stats

4. **ProjectsGrid.tsx**
   - Grid de proyectos con hover effects
   - Tags de tecnologías
   - Cards con transiciones suaves

5. **NewsletterSection.tsx**
   - Formulario de suscripción
   - Integración con servicio de newsletter
   - Estados de loading/success/error

6. **ContactSection.tsx**
   - Formulario de contacto
   - Integración con Formspree
   - Validación y feedback visual

7. **MinimalFooter.tsx**
   - Footer con links sociales
   - Grid responsivo
   - Copyright dinámico

8. **InfluencerStats.tsx**
   - Estadísticas de redes sociales
   - Cards con hover effects
   - Links a perfiles

9. **PricingTable.tsx**
   - Tabla de precios de colaboraciones
   - Grid de 3 columnas (TikTok, IG Reels, IG Stories)
   - CTA para contacto

10. **CVPage.tsx**
    - CV interactivo
    - Secciones: Experiencia, Skills, Logros, Certificaciones
    - Botón de descarga de PDF

## 🗂️ Estructura de Páginas

```
/[lang]                 - Landing principal
/[lang]/proyectos       - Grid de todos los proyectos
/[lang]/contenido       - Página de influencer (stats, pricing, demographics)
/[lang]/cv              - CV interactivo + descarga PDF
/[lang]/blog            - Blog (coming soon)
```

## 🎭 Animaciones

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Handwriting Effect
```css
@keyframes writeIn {
  from { opacity: 0; transform: translateY(10px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

### Delays Progresivos
- Usar `animationDelay` para efectos en cascada
- Ejemplo: `0.1s * índice` para letras

## 🔧 Estilos CSS

### Clases Utilitarias
- `.btn-primary` - Botón principal (rosa)
- `.btn-outline` - Botón outline (negro)
- `.card` - Card con hover effect
- `.input` / `.textarea` - Inputs con focus state
- `.section` - Padding de sección estándar
- `.section-alt` - Sección con background gris claro

### Responsive
- Mobile-first design
- Breakpoints: 768px (md)
- Grid responsivos con `auto-fit` y `minmax()`

## 📦 Datos

Todos los datos vienen de `/portfolio.json`:
- Información personal
- Proyectos
- Experiencia laboral
- Skills y certificaciones
- Estadísticas de influencer
- Precios de colaboraciones
- Analytics de TikTok

## 🌐 i18n

- Español (es) - por defecto
- Inglés (en)
- Textos dinámicos basados en `lang` prop
- Metadata SEO por idioma

## 🚀 Próximos Pasos

1. **Sistema de Blog**
   - MDX para contenido
   - Sistema de tags
   - Búsqueda

2. **Newsletter Backend**
   - Integrar con ConvertKit/Mailchimp
   - Confirmación de email

3. **Optimizaciones**
   - Lazy loading de imágenes
   - Optimización de fonts
   - Cache de datos

4. **Analytics**
   - Google Analytics
   - Tracking de conversiones
