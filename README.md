# Post App

## Backend

1. Configura PostgreSQL localmente (asegúrate que esté corriendo)
2. La tabla de datos en PostgreSQL debe llamarse postsDb(esta debe crearse).
3. Las credenciales utilizadas para PostgreSQL fueron utilizadas como Localhost ya que se trabajo con ambiente local de desarrollo.
4. Asegurar que el servicio de PostgreSQL este corriendo.
4. Ejecuta:

```
cd backend
npm install
node server.js
```

Backend correrá en http://localhost:3001

## Frontend

1. En otro terminal debera ejecutar las siguientes instrucciones asegurandose que esta en la raiz de la carpeta

```
cd frontend
npm install
npm run start
```

Frontend correrá en http://localhost:5173 y está proxy configurado para el backend.

## Funcionalidades

- Insertar posts
- Eliminar posts
- Listar posts
- Filtrar posts por nombre localmente

Se usa Sequelize como ORM para la base de datos PostgreSQL.
