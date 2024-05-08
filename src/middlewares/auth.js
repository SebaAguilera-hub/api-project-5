const jwt = require('express-jwt') // verificar el token
const secret = process.env.JWT_SECRET // verifica que el token sea correcto

const validateToken = (req) => {
    let { authorization } = req.headers;

    if(authorization) {
        let [ type, token ] = authorization.split(' ')
        return (type === 'Token' || type === 'Bearer') ? token : null
    }
}

const auth = jwt.expressjwt({
    secret,
    algorithms: ['HS256'],
    userProperty: 'user',
    validateToken
})

module.exports = auth