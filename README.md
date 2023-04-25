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

1. Descargar e instalar PostgreSQL.

https://user-images.githubusercontent.com/102885471/234153777-0684a27f-2106-499f-8206-7ff86a4da245.mp4

2. Descargar e instalar PostgREST:

Seguir las instrucciones de la página oficial. En este enlace se encuentran: https://postgrest.org/en/stable/install.html#installation

En nuestro caso, usaremos Windows:

Ir a la página https://github.com/PostgREST/postgrest/releases/ y descargar la última versión del ejecutable.

2.1. Configurar el archivo "postgrest.conf"

Para comenzar, se podrían utilizar estar dos líneas en el archivo de configuración.

```
## The standard connection URI format, documented at
## https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING
db-uri = "postgres://web_user:1234@localhost:5432/pruebas_siscob"

## The database role to use when no client authentication is provided
db-anon-role = "web_user"
```

Después, a medida que se deseen agregar más configuraciones se pueden establecer. Para esto puede remitirse a la documentación de PostgREST para ver que las opciones de configuración disponibles.

3. Ejecutar el script para la creación de la base de datos.

4. Crear el usuario y los permisos para conectarse por medio de la API RESTful.

5. Correr el archivo de configuración.

6. Probar alguno de los endpoints.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para más detalles.
