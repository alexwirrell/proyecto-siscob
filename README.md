<h1 align="center"> Proyecto-SISCOB </h1>

## Introducción 📋

Proyecto SISCOB nace como un proyecto formativo para el programa Análisis y Desarrollo de Software del Servicio Nacional de Aprendizaje - SENA. Con este se pretende aplicar los conocimientos adquiridos mediante la teoría y llevarlos a la practica. El proyecto se enfoca en el diseño e implementación de un **SIS**tema **CO**ntable **B**ásico.

El proceso de desarrollo seguirá un ciclo de vida de software estándar, que incluirá la definición de requerimientos, diseño de la solución, implementación, pruebas y mantenimiento del software. Se utilizarán herramientas y tecnologías adecuadas para cada fase del proceso de desarrollo.

El proyecto se llevará a cabo en equipo y se utilizará la plataforma Github para llevar un control de versiones y colaborar en el código. Se mantendrá una comunicación constante entre los miembros del equipo y se documentará todo el proceso de desarrollo para futuras referencias.

## Construido con 🛠️

_Como es un proyecto que persigue el aprendizaje de sus integrantes, se utilizaron las siguientes tecnologías:_

* [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Lenguaje de Marcas de Hipertexto.
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Lenguaje de estilos.
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación.
* [PostgreSQL](https://www.postgresql.org/) - Sistema de gestión de bases de datos relacional.
* [PostgREST](https://postgrest.org/en/stable/) - Servidor web independiente que convierte directamente su base de datos PostgreSQL en una API RESTful.
* [Spring Boot](https://spring.io/) - Para relacionar la entidad y la base de datos.

## Configuración del entorno de desarrollo 🗺️

_Nota: En los vídeos por favor disculpa la calidad del audio_

1. Descarga e instala PostgreSQL en tu sistema o servidor. Puedes hacerlo descargando el archivo ejecutable o utilizando un gestor de paquetes.

https://user-images.githubusercontent.com/102885471/234153777-0684a27f-2106-499f-8206-7ff86a4da245.mp4

2. Descargar e instalar PostgREST:

Seguir las instrucciones de la página oficial. En este enlace se encuentran: https://postgrest.org/en/stable/install.html#installation

En nuestro caso, usaremos Windows:

Ir a la página https://github.com/PostgREST/postgrest/releases/ y descargar la última versión del ejecutable.

Para más información, mira el siguiente vídeo:

https://user-images.githubusercontent.com/102885471/234163039-639a318a-4053-4fcc-b0d2-4996452bc6b2.mp4

3. Crear la base de datos. Para este ejercicio la llamaremos "pruebas_siscob".

```
-- Crear la base de datos
CREATE DATABASE pruebas_siscob;
```

Luego, en pgAdmin, se puede establecer la conexión a la base de datos en la cual se desea ejecutar las sentencias SQL mediante la selección de la base de datos en el árbol de objetos, haciendo clic derecho en ella y seleccionando la opción "Connect" o "Conectar". Una vez conectado, las instrucciones SQL se pueden ejecutar en la ventana de consulta.

4. Insertar los datos de prueba a la base de datos. Estos se encuentra en el archivo [datos_bd.sql](../../../proyecto-siscob/tree/master/datosBD/datos_bd.sql).

5. Crear el usuario y los permisos para conectarse por medio de la API RESTful.

```
--Crear el usuario
CREATE ROLE web_user LOGIN PASSWORD '1234';
```
Donde `'1234'` debe ser reemplazado por una contraseña segura para el rol. Luego, puedes conceder los permisos necesarios a `web_user` para que pueda interactuar con las tablas de la base de datos y utilizar la API RESTful creada con PostgREST.

```
--Asignar los permisos
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO web_user;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO web_user;
```
Estos comandos conceden permisos al rol `web_user` para usar todas las secuencias, seleccionar todas las tablas y ejecutar todas las funciones en el esquema `public` de la base de datos.

Es importante conceder solo los permisos necesarios para que el rol pueda realizar las acciones deseadas y mantener así la seguridad y la integridad de los datos en la base de datos.

6. Configurar el archivo "postgrest.conf"

Para comenzar, se podrían utilizar estar dos líneas en el archivo de configuración.

```
## The standard connection URI format, documented at
## https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING
db-uri = "postgres://web_user:1234@localhost:5432/pruebas_siscob"

## The database role to use when no client authentication is provided
db-anon-role = "web_user"
```
Estas líneas se pegarían en un archivo de texto y se guardaría con el nombre que se quiera, para nuestro caso lo nombraremos "postgrest.conf".

_Nota: Puedes asignar el nombre que quieras, pero la extensión debe ser .config_

Si deseen agregar más configuraciones se pueden establecer. Para esto puede remitirse a la documentación de PostgREST para ver que las opciones de configuración disponibles.

7. Inicia el servidor PostgREST utilizando el archivo de configuración o las variables de entorno.

Para iniciar el servidor PostgREST, primero debes asegurarte de haber creado el archivo de configuración o haber definido las variables de entorno necesarias. A continuación, sigue estos pasos:

   7.1. Abre una terminal o consola de comandos.

   7.2. Navega hasta el directorio donde se encuentra el archivo de configuración o donde has definido las variables de entorno.

   7.3. Ejecuta el siguiente comando:
    
    ```
    
   "C:\Program Files\PostgreSQL\15\bin\postgrest.exe" C:\Users\{TuUsuario}\Documents\{CarpetaDeTuElección}\PostgREST\configuracion\postgrest.conf

    ```
Este comando inicia el servidor en la URL `http://localhost:3000` (o cualquier otra configurada en el archivo `postgrest.conf`).

Si todo va bien, deberías ver un mensaje indicando que PostgREST se ha iniciado correctamente y en qué puerto está escuchando. Por defecto, PostgREST escucha en el puerto 3000, pero esto se puede cambiar en la configuración.

Una vez que el servidor PostgREST esté en funcionamiento, podrás interactuar con la API RESTful que has creado utilizando HTTP requests.

8. Accede a la API RESTful utilizando las rutas generadas por PostgREST, que siguen la convención RESTful y utilizan los nombres de las vistas y funciones que definiste en tu base de datos.

9. Realiza las solicitudes HTTP adecuadas para acceder a los recursos de la API RESTful, como GET, POST, PUT y DELETE, según sea necesario. Recuerda apoyarte de la documentación, en especial este enlace https://postgrest.org/en/stable/api.html#operators

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para más detalles.
