const User = require('../models/User.model');
const bcrypt = require('bcrypt')

const signUp = async(req, res) => {
    try {
        const { email } = req.body;

        const userExists = await User.findOne({ email })

        if (!userExists) {
            const newUser = new User(req.body);
            newUser.hashPassword(req.body.password) // encriptando la password
            const response = await newUser.save(); // guardo el nuevo usuario en la BD

            return res.json({
                message: 'User was created successfully',
                detail: response
            })
        } else {
            return res.json({
                message: 'el usuario ya esta existe'
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }) // buscamos en la bd el usuario

        const correctPassword = user === null ? false : await bcrypt.compare(password, user.password)

        if (!(user && correctPassword)) {
            return res.json({
                message: 'invalid user or password'
            })
        } else {
            return res.json({
                messsage: 'OK',
                detail: {
                    user,
                    token: user.generateJWT()
                }
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await User.find();
        console.log(response);
        if (response) {
            return res.json({
                message: 'users',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const newData = req.body;
        
        const response = await User.findByIdAndUpdate(
            newData.id,
            { $set: newData },
            { new: true }
        )

        if(response) {
            return res.json({
                message: 'Usuario actualizado exitosamente',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await User.findByIdAndDelete(req.body.userId)
        if (response) {
            return res.json({
                message: 'Usuario eliminado exitosamente',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

module.exports = {
    signUp,
    login,
    getAllUsers,
    updateUser,
    deleteUser
}