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

- **POST** `http://localhost:3001/api/admin` - Crear un nuevo administrador
- **GET** `http://localhost:3001/api/admin` - Obtener todos los administradores
- **GET** `http://localhost:3001/api/admin/name/:username` - Obtener un administrador por nombre de usuario
- **GET** `http://localhost:3001/api/admin/:id` - Obtener un administrador por ID
- **PUT** `http://localhost:3001/api/admin/:id` - Actualizar un administrador por ID
- **DELETE** `http://localhost:3001/api/admin/:id` - Eliminar un administrador por ID

### Condominios

- **POST** `http://localhost:3001/api/condominium` - Crear un nuevo condominio
- **GET** `http://localhost:3001/api/condominiums` - Obtener todos los condominios
- **GET** `http://localhost:3001/api/condominium/images` - Obtener todas las imágenes de los condominios
- **GET** `http://localhost:3001/api/condominium/:id` - Obtener un condominio por ID
- **PUT** `http://localhost:3001/api/condominium/:id` - Actualizar un condominio por ID
- **DELETE** `http://localhost:3001/api/condominium/:id` - Desactivar un condominio por ID

### Apartamentos

- **POST** `http://localhost:3001/api/apartments` - Crear un nuevo apartamento
- **GET** `http://localhost:3001/api/apartments` - Obtener todos los apartamentos
- **GET** `http://localhost:3001/api/apartments/:id` - Obtener un apartamento por ID
- **PUT** `http://localhost:3001/api/apartments/:id` - Actualizar un apartamento por ID
- **DELETE** `http://localhost:3001/api/apartments/:id` - Desactivar un apartamento por ID

### Áreas Comunes

- **POST** `http://localhost:3001/api/common-areas` - Crear una nueva área común
- **GET** `http://localhost:3001/api/common-areas` - Obtener todas las áreas comunes
- **GET** `http://localhost:3001/api/common-areas/:id` - Obtener un área común por ID
- **PUT** `http://localhost:3001/api/common-areas/:id` - Actualizar un área común por ID
- **DELETE** `http://localhost:3001/api/common-areas/:id` - Eliminar un área común por ID

### Residentes

- **POST** `http://localhost:3001/api/residents` - Crear un nuevo residente
- **GET** `http://localhost:3001/api/residents` - Obtener todos los residentes
- **GET** `http://localhost:3001/api/residents/:id` - Obtener un residente por ID
- **PUT** `http://localhost:3001/api/residents/:id` - Actualizar un residente por ID
- **DELETE** `http://localhost:3001/api/residents/:id` - Desactivar un residente por ID

### Pagos

- **POST** `http://localhost:3001/api/payments` - Crear un nuevo pago
- **GET** `http://localhost:3001/api/payments` - Obtener todos los pagos
- **GET** `http://localhost:3001/api/payments/:id` - Obtener un pago por ID

### Suscripciones

- **POST** `http://localhost:3001/api/subscriptions` - Crear una nueva suscripción
- **GET** `http://localhost:3001/api/subscriptions` - Obtener todas las suscripciones

## Stack

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

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
