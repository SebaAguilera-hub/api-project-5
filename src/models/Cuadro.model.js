//importar mongoose
const mongoose = require("mongoose");

//schema de producto
const cuadroSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
{
   timestamps: true  
}
)

//creacion de modelo
const Cuadro = mongoose.model("Cuadro", cuadroSchema)

//Exportacion
module.exports = Cuadro