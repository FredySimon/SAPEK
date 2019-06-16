const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use (morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/personas', require('./routes/persona.routes'))
app.use('/api/familias', require('./routes/familia.routes'))
app.use('/api/unidades', require('./routes/unidad.routes'))
app.use('/api/carreras', require('./routes/carrera.routes'))
app.use('/api/cursos', require('./routes/curso.routes'))
app.use('/api/redes', require('./routes/red.routes'))
app.use('/api/instructores', require('./routes/instructor.routes'))
app.use('/api/asignacionCarreras', require('./routes/asignacionCarreras.routes'))
app.use('/api/asignacionCursos', require('./routes/asignacionCursos.routes'))
app.use('/api/asignacionRed', require('./routes/asignacionRed.routes'))
app.use('/api/inscripciones', require('./routes/inscripcion.routes'))
app.use('/api/usuarios', require('./routes/usuario.routes'))

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})