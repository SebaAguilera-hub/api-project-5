
const Cuadro = require("../models/Cuadro.model")
// const bcrypt = require("bcrypt")


const obtenerCuadro = async (req,res)=> {
    const {id} = req.params
    try{
        const cuadro = await Cuadro.findById(id)

        res.json({
            cuadro
        })
    }catch(error){
        res.json({
            message: "Error al buscar el cuadro",
            detail: message.error
        })
    }
}


const createCuadro = async(req,res) =>{
    // const {
    //     name,
    //     price,
    //     size,
    //     image } = req.body;
    
    // try{
    //     const newCuadro = await Cuadro.create({name, price, size,image})
    //     res.json(newCuadro)
    // }catch(error){
    //     res.status(500).json({
    //         message: "Hubo un error creando la guitarra",
    //         error
    //     })
    // }

    try{
        const cuadro = new Cuadro(req.body)
        const response = await cuadro.save()

        if(response){
            return res.json({
                message: "Cuadro creado",
                detail: response
            })
        }else{
            return res.json({
                message: "error en save cuadro"
            })
        }
    }catch(error){
        return res.json({
            message: "error al crear cuadro",
            detail: error.message
        })
    }
    
}



const getAllCuadros = async(req,res)=>{
    try{
       const response = await Cuadro.find()

       if(response){
            return res.json({
                message: "cuadros",
                detail: response
            })
       }

    }catch(error){
        return res.json({
            message: "Error",
            detail: error.message
        })
    }
}

const updateCuadro = async (req,res) => {
    try{
       const newData = req.body
       const response = await Cuadro.findByIdAndUpdate(
        newData.id,
        {$set: newData},
        {new: true}
       )

       if(response){
         return res.json({
            message: "Cuadro actualizado",
            detail: response
         })
       }
    }catch(error){
       return res.json({
         message: "Error",
         detail: error.message
       })
    }
}

const deleteCuadro = async (req,res) =>{
    try{
        const response = await Cuadro.findByIdAndDelete(req.body.cuadroId)
        if(response){
            return res.json({
                message: "Cuadro eliminado exitosamente",
                detail: response
            })
        } 
    }catch(error){
        return res.json({
            message: "Error",
            detail: error.message
        })
    }
}


module.exports = {
    deleteCuadro,
    getAllCuadros,
    updateCuadro,
    createCuadro,
    obtenerCuadro }
