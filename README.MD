> # Encodelabs S.A - Prueba Técnica

- ## GraphQL API User CRUD

- ### Tech Stack

  - **NodeJS/TypeScript**

  - **MongoDB/Mongoose**

  - **GraphQL**

  - **Apollo Server**

  - **Docker**

  - **Bash**

- ## Observaciones

  - La aplicación consta de un servidor apollo con operaciones basicas CRUD de usuarios. Los mismos cuentan con los campos: id, name, email y password. Dichos usuarios son guardadas en una instancia de base de datos MongoDB. Este cuenta con validaciones basicas de formato de email, pero podrian agregarse otras de ser necesarias. Como tambien encriptacion de contraseñas con Bcrypt o librerias afines. Ademas de un manejo de errores basico.

    A su vez, el repositorio cuenta con un archivo Dockerfile en caso de querer levantar un contenedor de la aplicación con Docker. Como tambien un archivo docker-compose en caso de querer orquestar tanto la aplicación como la instancia de MongoDB.

    Por ultimo, de forma adicional agregue un bash script start.sh el cual guia al usuario en la creacion del archivo .env y la ejecucion del docker compose. Esta es la forma recomendada para correr la aplicación.

  - **Variables de entorno:** La aplicacion precisa de 5 variables de entorno para funcionar:

    ```.env
    PORT=... # El puerto que escuchará el servidor apollo
    DB_NAME=... # El nombre de la base de datos
    DB_USER=... # El nombre de usuario con el que se autenticara a la base de datos
    DB_PASSWORD=... # La contraseña correspondiente al usuario
    DB=URI=... # La URI resultante de la conexion a base de datos. El formato es el siguiente: mongodb://${DB_USER}:${DB_PASSWORD}@host:port/
    ```

- ## Como correr la aplicación

  - **Start script (Recomendado)**

    - Dar permisos al script en caso de ser necesario (Mac, Linux):

      ```bash
      chmod +x start.sh
      ```

    - Ejecutar:

      ```bash
      ./start.sh
      ```

  - **Local**

    - Crear archivo .env

    - Ejecutar:

      ```bash
      npm install && npm start
      ```

  - **Docker sin Compose**

    - Crear archivo .env

    - Ejecutar:

      ```bash
      docker build -t nombre-imagen:etiqueta .

      docker run -p 4000:4000 nombre-imagen:etiqueta
      ```

  - **Docker Compose**

    - Crear archivo .env

    - Ejecutar:

      ```bash
      docker compose up
      ```
