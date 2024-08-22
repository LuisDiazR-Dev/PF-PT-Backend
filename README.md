# Proyecto Backend - Gestión de Condominio

Este proyecto consiste en la creación de un backend utilizando Node.js, Express y PostgreSQL
destinado para la gestión de condominios y conjuntos de apartamentos.

La aplicación permite al administrador gestionar residentes, áreas comunes y notificaciones.
estamos en desarrollo...

## Team

- Jesu Guzmán

## Descripción

El backend será diseñado para cubrir las necesidades
de administración de un condominio,
proporcionando una estructura modular que incluye:

- **Cuentas y Suscripciones:**

Gestión de cuentas de administrador, así como la administración de suscripciones para diferentes planes.

- **Residentes:**

Manejo de la información de los residentes del condominio.

- **Áreas Comunes:**

Gestión de reservas y administración de áreas comunes.

- **Notificaciones:**

Sistema de notificaciones para mantener informados a los residentes.
## Endpoints de la API

### Administradores

- **POST** `http://localhost:3001/admin`
- **GET** `http://localhost:3001/admin`
- **GET** `http://localhost:3001/admin/name/:username`
- **GET** `http://localhost:3001/admin/:id`
- **PUT** `http://localhost:3001/admin/:id`
- **DELETE** `http://localhost:3001/admin/:id`

## Stack

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Manejo de ramas

1. Subiendo la rama development o cualquier otra rama

- git checkout development
- git status
- git push origin development

1. Trayendo la rama development o cualquier otra rama

- git fetch
  - Obtener las actualizaciones del repositorio remoto
- git branch -r
  - Listar todas las ramas remotas
- git checkout -b develop origin/develop
  - y quedas parado en development. luego crear tu rama de trabajo

1. Creando ramas

- git branch
  - para ver todas las ramas y saber en cual estoy
- git branch "nombre de la rama"
  - sin comillas, crea rama
- git branch -M "newname"
  - renombra la rama en la que se esta actualmente
- git branch -D "nombreDeLaRama"
  - para eliminar rama
- git checkout "nombre de rama"
  - para desplazarse entre ramas
- git checkout -
  - Te devuelve a la rama anterior activa
- git show-branch
  - muestra las ramas que hay y el ultimo commit de cada una
- git show branch --all
  - igual anterior pero con mas detalles
- git merge "nombreDeLaRama"
  - fusiona la mara actual con la rama que definimos en el comando
