# Post App

## Backend

1. Configura PostgreSQL localmente (asegúrate que esté corriendo).
2. La base de datos PostgreSQL debe llamarse `postsDb` (debes crearla manualmente).
3. Configura las credenciales y conexión en un archivo `.env` en la carpeta `backend` con el siguiente contenido:

    ```
    DB_NAME=postsDb
    DB_USER=postgres
    DB_PASS=123456
    DB_HOST=localhost
    PORT=3001
    ```

4. Asegúrate que el servicio de PostgreSQL esté corriendo.
5. Ejecuta:

    ```
    cd backend
    npm install
    node server.js
    ```

   El backend correrá en [http://localhost:3001](http://localhost:3001).

## Frontend

1. En otra terminal, ejecuta los siguientes comandos asegurándote que estás en la raíz de la carpeta frontend:

    ```
    cd frontend
    npm install
    npm run start
    ```

   El frontend correrá en [http://localhost:5173](http://localhost:5173) y está configurado para hacer proxy al backend.

## Funcionalidades

- Insertar posts
- Eliminar posts
- Listar posts
- Filtrar posts por nombre localmente

Se usa Sequelize como ORM para PostgreSQL y la configuración de conexión se maneja mediante variables de entorno.

---

**Nota:** No olvides agregar el archivo `.env` a tu `.gitignore` para evitar subir credenciales al repositorio.
