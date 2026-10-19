# Synor Cloud Gamma - Arquitectura Web Modular (Web Components)

Este proyecto ha sido compilado y exportado automáticamente por **OmniFlow Platform** utilizando el estándar oficial W3C de **Componentes Web Nativos (Custom Elements)**.

## Ventajas de esta Arquitectura
1. **Zero-Dependencies (Cero configuración)**: No requiere Node.js, npm ni herramientas de construcción. Funciona haciendo doble clic en `index.html`.
2. **Modular y Mantenible (DRY)**: El archivo `index.html` es un orquestador limpio y declarativo. Todos los widgets están desacoplados en la carpeta `components/`.
3. **Fácil Edición Low-Code**: Para modificar el encabezado (`components/header.js`) o el pie de página (`components/footer.js`), puedes editar el archivo directamente y ver los cambios reflejados al instante en todas las páginas.
4. **Compatible con Escritorio y Móvil**:
   - Para crear una app de escritorio nativa: utiliza **Tauri** apuntando a esta carpeta.
   - Para crear una app móvil nativa (iOS/Android): utiliza **Capacitor** apuntando a esta carpeta.

## Estructura del Proyecto
```
.
├── index.html                   # Orquestador raíz de la aplicación
├── components/                  # Componentes Web aislados y reutilizables
│   ├── header.js                # Componente <omniflow-header>
│   ├── hero-banner.js           # Componente <omniflow-hero-banner>
│   ├── interactive-floating-button.js # Componente <omniflow-interactive-floating-button>
│   ├── marquee.js               # Componente <omniflow-marquee>
│   ├── container.js             # Componente <omniflow-container>
│   ├── footer.js                # Componente <omniflow-footer>
│   ├── widget-card.js           # Componente <omniflow-widget-card>
│   └── omniflow-components.js   # Bundle unificado de componentes
├── css/
│   └── styles.css               # Estilos consolidados y tokens de diseño
├── js/
│   └── runtime.js               # Motor reactivo de estado y eventos
└── assets/                      # Biblioteca de medios e imágenes
```
