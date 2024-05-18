const express = require("express")
const router = express.Router()
const {createCuadro,deleteCuadro,getAllCuadros,updateCuadro, obtenerCuadro} = require ("../controllers/Cuadro.controller")

// const auth = require("../middlewares/auth") QUIZA SEA NECEASRIO DESCOMENTAR

router.get("/obtener-cuadros", getAllCuadros);
router.get("/:id", obtenerCuadro)
router.post("/crear-cuadro", createCuadro)
router.put("/editar-cuadro", updateCuadro)
router.delete("/eliminar-cuadro", deleteCuadro)

module.exports = router

// --> /v1/cuadros/...