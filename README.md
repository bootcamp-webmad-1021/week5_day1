## 1. Organizar rutas
  - Crear base.routes
  - Modificar index.js en carpeta routes
  - Crear bloques de rutas por temática (libros, movies, user, admin, etc...)
## 2. Crear middlewares de acceso
  - Crear carpeta middlewares
  - Comprobar login o roles.
## 3. Utilities
  - Crear carpeta de utils para alojar funciones de *alta reusabilidad*
## 4. Renderizado condicional (warning similar a middlewares)
  - En utils añadir funciones que comparen y devuelvan true o false para ser empleadas en HBS.
## 5. Owned Items
  - Añadir al modelo la propiedad de owner.
  - Crear una función que compruebe si eres el propietario.