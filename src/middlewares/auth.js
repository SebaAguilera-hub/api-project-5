// const jwt = require('express-jwt') // verificar el token
// const secret = process.env.JWT_SECRET // verifica que el token sea correcto

// const validateToken = (req) => {
//     let { authorization } = req.headers;

//     if(authorization) {
//         let [ type, token ] = authorization.split(' ')
//         return (type === 'Token' || type === 'Bearer') ? token : null
//     }
// }

// const auth = jwt.expressjwt({
//     secret,
//     algorithms: ['HS256'],
//     userProperty: 'user',
//     validateToken
// })

// module.exports = auth

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const token = req.header('x-auth-token')

    if(!token) {
        return res.status(401).json({
            msg: "No hay token, permiso no válido"
        })
    }

    try {
        const openToken = jwt.verify(token, process.env.JWT_SECRET)    //ANTES ERA SECRET

        req.user = openToken.user

        next()


    } catch (error) {
        res.json({
            msg: "Hubo un error",
            error
        })
    }

}
