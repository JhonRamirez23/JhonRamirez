# Jhon Ramirez · Portafolio profesional

Portafolio web de **Jhon Freddy Ramirez Alban**, desarrollador de software Full Stack. El proyecto presenta experiencia profesional, proyectos reales, capacidades técnicas y una hoja de vida lista para imprimir o guardar como PDF.

## Contenido

- Página principal con presentación profesional, métricas, proyectos, experiencia en código, capacidades técnicas, perfil y contacto.
- Sección de proyectos enlazada a repositorios reales de GitHub.
- Menú responsive para navegación en dispositivos móviles.
- Hoja de vida independiente optimizada para formato A4.
- Botón de descarga mediante `window.print()` para guardar la hoja de vida como PDF.

## Estructura

```text
.
├── index.html          # Portafolio principal
├── style.css           # Estilos del portafolio y diseño responsive
├── script.js           # Menú móvil y navegación
├── script2.js          # Archivo conservado por compatibilidad
├── hv/
│   ├── index.html      # Hoja de vida imprimible
│   ├── style.css       # Estilos responsive y de impresión A4
│   └── script.js       # Acción window.print()
├── img/
│   └── logo.ico        # Favicon
└── docs/               # Referencias visuales del diseño
```

## Tecnologías

- HTML5 semántico
- CSS3 con variables, Flexbox, Grid y media queries
- JavaScript vanilla
- Google Fonts: Manrope y JetBrains Mono
- Diseño responsive con breakpoints en 768px y 1200px
- Impresión a PDF con la API nativa `window.print()`

## Ejecutar localmente

El proyecto es estático y no requiere instalación de dependencias. Puede abrirse directamente en el navegador o servirse con cualquier servidor local:

```bash
python -m http.server 8000
```

Después, visita [http://localhost:8000](http://localhost:8000).

## Hoja de vida

La hoja de vida está disponible en [`hv/index.html`](./hv/index.html). Desde el portafolio principal también puede abrirse mediante el enlace **Descargar hoja de vida (PDF)**.

Para generar el PDF:

1. Abre la hoja de vida.
2. Haz clic en **Descargar PDF**.
3. Selecciona **Guardar como PDF** en el diálogo de impresión del navegador.

La barra de acciones se oculta automáticamente al imprimir y el documento utiliza formato A4.

## Proyectos destacados

- [Panel administrativo](https://github.com/JhonRamirez23/adminPanel) — Laravel 12 y Filament.
- [Backend Node](https://github.com/JhonRamirez23/backend-node) — CRUD de usuarios.
- [Gestión de tareas · Frontend](https://github.com/JhonRamirez23/GestionTareas-Frontend) — Angular 19.
- [Gestión de tareas · Backend](https://github.com/JhonRamirez23/gestionTareas) — Sequelize y configuración CORS.
- [Prueba Codesa](https://github.com/JhonRamirez23/prueba_codesa) — Java y Spring Boot.

## Contacto

- Email: [jhon.alban23@outlook.com](mailto:jhon.alban23@outlook.com)
- LinkedIn: [linkedin.com/in/jhonramirezalban](https://www.linkedin.com/in/jhonramirezalban)
- GitHub: [github.com/JhonRamirez23](https://github.com/JhonRamirez23)
