const mysql = require('mysql');

// crear Conexion
const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'usuarios_db',
  user: 'root',
  password: '123456',
});

// Conectar
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log('Conexion Existosa');
  }
});

// Mostrar
conexion.query('SELECT * FROM usuarios', function (error, filas) {
  if (error) {
    throw error;
  } else {
    filas.forEach((fila) => {
      console.log(fila);
    });
  }
});

// Insertar
conexion.query(
  'INSERT INTO usuarios(nombre, apellido) VALUES("Edwin", "Guzman")',
  function (error, results) {
    if (error) {
      throw error;
    } else {
      console.log('Registro Agragado ', results);
    }
  }
);

// Actualizar
conexion.query(
  'UPDATE usuarios SET nombre = "Harold", apellido = "Guateque" WHERE id = 2',
  function (error, results) {
    if (error) {
      throw error;
    } else {
      console.log('Registro Actualizado ', results);
    }
  }
);

// Eliminar
conexion.query('DELETE FROM usuarios WHERE id = 3', function (error, results) {
  if (error) {
    throw error;
  } else {
    console.log('Registro Eliminado ', results);
  }
});

// Mostrar
conexion.query('SELECT * FROM usuarios', function (error, filas) {
  if (error) {
    throw error;
  } else {
    filas.forEach((fila) => {
      console.log(fila);
    });
  }
});

// Terminar Conexion
conexion.end();
