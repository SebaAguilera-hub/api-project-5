const express = require("express")
const router = express.Router()
const {createCuadro,deleteCuadro,getAllCuadros,updateCuadro} = require ("../controllers/Cuadro.controller")

// const auth = require("../middlewares/auth") QUIZA SEA NECEASRIO DESCOMENTAR

router.get("/", getAllCuadros);
router.post("/crear-cuadro", createCuadro)
router.put("/editar-cuadro", updateCuadro)
router.delete("/eliminar-cuadro", deleteCuadro)

module.exports = router

// --> /v1/cuadros/...