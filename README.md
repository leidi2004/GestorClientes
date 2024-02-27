# GestorClientes

Aplicacion para gestionar clientes.


## Funciones

- agregar clientes
- Listar clientes
- Ver un cliente
- Eliminar cliente
- Editar cliente 



inicializar el frontend

```bash
cd client 

npm install

//para empezar servidor
npm run dev
```

inicializar el backend

```bash
cd server 
npm install
node index.js

(por defecto en http://localhost:3000)
```

Base de datos

```bash
CREATE DATABASE clientes;

CREATE TABLE clientes(
    identificacion VARCHAR(20) NOT NULL PRIMARY KEY,
    tipoIdentificacion VARCHAR(30) NOT NULL,
    primerNombre VARCHAR(40) NOT NULL,
    segundoNombre VARCHAR(40),
    primerApellido VARCHAR(40) NOT NULL,
    segundoApellido VARCHAR(40),
    direccion VARCHAR(100),
    telefono INTEGER(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    ocupacion VARCHAR(100),
    fechaNacimiento DATE NOT NULL,
    foto VARCHAR(255)
)
```

## Tecnologias Usadas

- ReactJS
- CSS
- NodeJS
- Express

## Metodologias

- BEM
- Mobile First WorkFlow

## ScreenShots
