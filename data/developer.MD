//Este documento define la estructura obligatoria y opcional que debe tener cada desarrollador dentro del archivo developers.json.

# 📚 Estructura de perfiles de desarrolladores

Este documento define la estructura obligatoria y opcional que debe tener cada desarrollador dentro del archivo developers.json.

```json
{
  "username": "string",
  "name": "string",
  "role": "string",
  "avatar": "string (path URL)",
  "shortBio": "string",
  "about": "string",
  "location": {
    "city": "string",
    "country": "string"
  },
  "experienceYears": number,
  "skills": {
    "languages": "string[]",
    "frontend": "string[]",
    "backend": "string[]",
    "databases": "string[]",
    "devops": "string[]",
    "uiux": "string[]"
  },
  "experience": [
    {
      "company": "string",
      "position": "string",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD | 'Present'",
      "description": "string"
    }
  ],
  "projects": [
    {
      "name": "string",
      "description": "string",
      "technologies": "string[]",
      "url": "string (URL)"
    }
  ],
  "certifications": [
    {
      "title": "string",
      "organization": "string",
      "year": number
    }
  ],
  "social": {
    "github": "string (URL)",
    "linkedin": "string (URL)",
    "twitter": "string (URL)",
    "portfolio": "string (URL)"
  },
  "tags": "string[]",
  "availability": "string",
  "updatedAt": "YYYY-MM-DD"
}
```

## 🧭 Descripción de cada campo

| Campo                         | Tipo        | Obligatorio | Descripción                                                                                               |
| ----------------------------- | ----------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| username                      | string      | ✔           | Identificador único (solo minúsculas y guiones).                                                          |
| name                          | string      | ✔           | Nombre completo del desarrollador                                                                         |
| role                          | string      | ✔           | Rol principal (ej: “Fullstack Developer”, “Frontend Developer”)                                           |
| avatar                        | string      | ✔           | Ruta local o URL de imagen. Recomendado: /public/images/developers/nombre.webp                            |
| shortBio                      | string      | ✔           | Biografía corta (máx. 200 caracteres).                                                                    |
| about                         | string      | ✔           | Descripción larga sobre el desarrollador.                                                                 |
| location                      | object      | ✔           | Ambos se usan para filtros (city → ciudad principal; country → país)                                      |
| experienceYears               | number      | ✔           | Años totales de experiencia profesional                                                                   |
| skills (Habilidades técnicas) | object      | opcional    | Todos los campos son obligatorios, pero pueden contener un array vacío si no aplica.                      |
| experience                    | array       | opcional    | Cada entrada debe tener este formato:                                                                     |
| company                       | string      | ✔           |                                                                                                           |
| position                      | string      | ✔           |                                                                                                           |
| start                         | date        | ✔           | YYYY-MM-DD                                                                                                |
| end                           | date        | ✔           | YYYY-MM-DD                                                                                                |
| description                   | string      | ✔           |                                                                                                           |
| projects                      | array       | opcional    | url puede apuntar a demo, GitHub o sitio oficial.                                                         |
| certifications                | array       | opcional    |                                                                                                           |
| social                        | object      | opcional    | Debe tener SIEMPRE estas 4 claves, aunque alguna puede quedar vacía: github, linkedin, twitter, portfolio |
| tags                          | array       | ✔           | Array de palabras clave. Se usa para filtros y búsqueda avanzada.                                         |
| availability                  | string      | ✔           | Ejemplos válidos: "Open to work", "Not available", "Freelance only", "Part-time"                          |
| updatedAt                     | Formato ISO | ✔           | Usado para ordenar perfiles y mostrar fecha de actualización.                                             |

## 🟢 Plantilla base para nuevos perfiles

```json
{
  "username": "",
  "name": "",
  "role": "",
  "avatar": "/images/developers/.jpg",
  "shortBio": "",
  "about": "",
  "location": {
    "city": "",
    "country": ""
  },
  "experienceYears": 0,
  "skills": {
    "languages": [],
    "frontend": [],
    "backend": [],
    "databases": [],
    "devops": [],
    "uiux": []
  },
  "experience": [],
  "projects": [],
  "certifications": [],
  "social": {
    "github": "",
    "linkedin": "",
    "twitter": "",
    "portfolio": ""
  },
  "tags": [],
  "availability": "",
  "updatedAt": "2025-12-01"
}
```
