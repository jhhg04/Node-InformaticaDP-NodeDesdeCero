const mongoose = require('mongoose');

const url = 'mongodb://localhost/mongo1_curso';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado a Mongo'))
  .catch((e) => console.log('Erroren conexion ', e));

const mySchema = mongoose.Schema(
  {
    nombre: String,
    edad: Number,
    pais: String,
  },
  { versionKey: false }
);

const PersonaModel = mongoose.model('personas', mySchema);

// Mostrar
const mostrar = async () => {
  const personas = await PersonaModel.find();
  console.log(personas);
};

// Crear
const crear = async () => {
  const persona = new PersonaModel({
    nombre: 'Beto',
    edad: 30,
    pais: 'Venezuela',
  });
  const resultado = await persona.save();
  console.log(resultado);
};

// Editar
const editar = async (id) => {
  const persona = await PersonaModel.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        nombre: 'Pedro Modify',
        edad: 31,
        pais: 'Argentina Modify',
      },
    }
  );
};

// Eliminar
const eliminar = async (id) => {
  const persona = await PersonaModel.deleteOne({
    _id: id,
  });
  console.log(persona);
};

// Llamadas
// mostrar();
// crear();
// editar('63320bf95181c0a411e1e17f');
eliminar('63320bf95181c0a411e1e17f');
