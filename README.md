# Diseño y Desarrollo Web

Proyecto estático con HTML, CSS y JavaScript que consume la API de [OMDb](https://www.omdbapi.com/) para buscar películas y series.

## Por qué necesitás un servidor local

Si abrís los archivos `.html` directamente desde el explorador de archivos (protocolo `file://`), el navegador bloquea las llamadas AJAX por restricciones de seguridad (CORS). Para que funcionen correctamente hay que servir el proyecto desde un servidor HTTP local.

## Cómo ejecutarlo

### Opción 1 — Python (recomendado, no requiere instalación extra)

```bash
python -m http.server 8080
```

Luego abrí: [http://localhost:8080](http://localhost:8080)

### Opción 2 — Node.js

```bash
npx serve .
```

Luego abrí: [http://localhost:3000](http://localhost:3000)

> Ambas opciones requieren tener Python 3 o Node.js instalado respectivamente. Ejecutá el comando desde la carpeta raíz del proyecto.
