const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Conexion
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientes",
});

//Manejo de conexion a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectarse a la base de datos", err);
  } else {
    console.log("Exito al conectarse a la base de datos");
  }
});

// Configuración de Multer para el manejo de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Consultar todos los clientes
app.get("/api/clientes", (req, res) => {
  const getClientes = "SELECT * FROM clientes";

  connection.query(getClientes, (err, result) => {
    if (err) {
      console.error("Error al obtener clientes:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(result);
    }
  });
});

// Consultar un cliente por identificación
app.get("/api/clientes/:identificacion", (req, res) => {
  const identificacionCliente = req.params.identificacion;
  const getCliente = "SELECT * FROM clientes WHERE identificacion = ?";

  connection.query(getCliente, [identificacionCliente], (err, result) => {
    if (err) {
      console.error("Error al obtener cliente por identificacion:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      if (result.length === 0) {
        res.status(404).json({ error: "Cliente no encontrado" });
      } else {
        res.json(result[0]);
      }
    }
  });
});

//eliminar cliente
app.delete("/api/clientes/:identificacion", (req, res) => {
  const identificacionCliente = req.params.identificacion;
  const eliminarCliente = "DELETE FROM clientes WHERE identificacion = ?";

  connection.query(eliminarCliente, [identificacionCliente], (err, result) => {
    if (err) {
      console.error("Error al eliminar cliente por ID:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Cliente no encontrado" });
      } else {
        res.json({ success: true });
      }
    }
  });
});

// Agregar nuevo cliente
app.post("/api/clientes", upload.single("foto"), (req, res) => {
  const {
    identificacion,
    tipoIdentificacion,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    direccion,
    telefono,
    email,
    ocupacion,
    fechaNacimiento,
  } = req.body;
  const foto = req.file ? req.file.filename : null;

  const agregarCliente =
    "INSERT INTO clientes (identificacion, tipoIdentificacion, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, ocupacion, fechaNacimiento, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    agregarCliente,
    [
      identificacion,
      tipoIdentificacion,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      direccion,
      telefono,
      email,
      ocupacion,
      fechaNacimiento,
      foto,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al agregar nuevo cliente:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.json({ success: true, insertedId: result.insertId });
      }
    }
  );
});

//editar
app.put("/api/clientes/:identificacion", upload.single("foto"), (req, res) => {
  const identificacionCliente = req.params.identificacion;
  const {
    tipoIdentificacion,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    direccion,
    telefono,
    email,
    ocupacion,
    fechaNacimiento,
  } = req.body;
  const foto = req.file ? req.file.filename : null;

  const actualizarCliente =
    "UPDATE clientes SET tipoIdentificacion=?, primerNombre=?, segundoNombre=?, primerApellido=?, segundoApellido=?, direccion=?, telefono=?, email=?, ocupacion=?, fechaNacimiento=?, foto=? WHERE identificacion=?";

  connection.query(
    actualizarCliente,
    [
      tipoIdentificacion,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      direccion,
      telefono,
      email,
      ocupacion,
      fechaNacimiento,
      foto,
      identificacionCliente,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar cliente por ID:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: "Cliente no encontrado" });
        } else {
          res.json({ success: true });
        }
      }
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
