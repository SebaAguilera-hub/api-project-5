//IMPORTACIONES
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;

//CONEXION A LA BASE DE DATOS
mongoose.connect(process.env.MONGODB_URI);


//CORN - MIDDLEWARE
app.use(cors())
app.use(express.json());


//ENRUTAMIENTO A OTRAS RUTAS
app.use('/v1', routes);
//http:localhost:XXXX/v1/...

app.get('/', (req, res) => {
    res.send('todo OK');
})

//ESCUCHAR UN PUERTO
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
})


