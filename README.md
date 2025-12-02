# 🔮 Comunidad del Oráculo — Web Oficial

La **Comunidad del Oráculo** es un espacio conformado por desarrolladores con diversa experiencia, habilidades y áreas de especialización.
Este proyecto tiene como objetivo centralizar perfiles, actividades, charlas, cursos y proyectos colaborativos, brindando una plataforma profesional, moderna y optimizada para SEO.

## 🚀 Tecnologías principales

- **Next.js 16**
- **React 19**
- **TailwindCSS**
- **Zustand** (para manejo de estado global)
- **TypeScript**
- **SSG con optimización SEO al 100%**
- **Estructura modular y escalable**

## 🎨 Paleta de colores

La identidad visual del proyecto utiliza los siguientes tonos:

- **Primario:** `#8c52ff`
- **Secundario:** `#ffffff`
- Gradientes y tonalidades derivadas entre ambos.

## 📂 Estructura general del proyecto

```javascript
/
├─ app/
| ├─ activities/
│ │ ├─ [slug]
| | └─ page.tsx
| ├─ components/
| ├─ developers/
│ │ ├─ [username]
| | └─ page.tsx
| ├─ robots.txt
| └─ sitemap.ts
├─ data/
| ├─ developers/
| └─activities/
├─ public/
| └─ images/
├─ lib/
└─ README.md

```

## 📁 Contenido del sitio

### 🧑‍💻 Perfiles de desarrolladores

Listado completo de los miembros de la comunidad con su experiencia, habilidades, proyectos y redes sociales.

### 📅 Actividades

Charlas, cursos, talleres y proyectos comunitarios con detalles, agenda, links y recursos.

### 📌 Acerca de la comunidad

Descripción de quiénes somos, misión, visión y propósito de la Comunidad del Oráculo.

## ⚙️ Instalación y ejecución

### Clonar el repositorio

```bash
git clone https://github.com/comunidad-oraculo/web.git
cd web
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Generar build de producción

```bash
npm run build
npm start
```

## 🧪 Buenas prácticas

- Utilizar componentes reutilizables.
- Mantener código tipado con TypeScript.
- Todo nuevo componente debe incluir:
  - Accesibilidad
  - Responsividad
  - Buenas prácticas SEO

## 📦 Directorio /data

Los perfiles y actividades se almacenan como JSON estáticos para permitir:

- SSG (Static Site Generation)
- Buen rendimiento
- Fácil edición por colaboradores sin conocimiento profundo del código

## 📈 SEO

- Metadata generada por ruta con generateMetadata
- URL limpias y amigables
- Marcado semántico y uso de JSON-LD (schema)
- Lighthouse 100% en SEO como objetivo principal

## 🤝 Contribuciones

- Crear una rama nueva: feature/nombre-de-la-feature
- Enviar un Pull Request con descripción detallada.
- Toda contribución será revisada por el equipo técnico.

### Convenciones de commits

Usamos la convención estándar:

```javascript
<type>: <descripción breve>
```

Tipos permitidos

| Tipo       | Uso                                                                   |
| ---------- | --------------------------------------------------------------------- |
| `feat`     | Nueva funcionalidad                                                   |
| `fix`      | Corrección de bug                                                     |
| `docs`     | Cambios en documentación                                              |
| `style`    | Cambios que no afectan el comportamiento (formato, indentación, etc.) |
| `refactor` | Refactorización sin cambiar funcionalidad                             |
| `test`     | Agregado o modificación de tests                                      |
| `chore`    | Cambios menores en configuración o tareas                             |
| `perf`     | Mejoras de rendimiento                                                |

### Ejemplos

```javascript
feat: agrega filtro por rol de usuario
fix: corrige error en paginación
docs: añade guía de instalación
refactor: simplifica lógica de validación
```

## 📜 Licencia

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)

## 🌟 Créditos

Comunidad del Oráculo — 2025
Equipo de desarrollo y colaboradores voluntarios.
