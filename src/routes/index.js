const express = require('express');
const router = express.Router();
const userRoutes = require('./User.router');
const cuadroRoutes = require("./Cuadro.router")

router.use('/user', userRoutes);
router.use("/cuadros", cuadroRoutes);


module.exports = router;
//http:localhost:3000/v1/users
