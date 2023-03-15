const { Router } = require("express");
const participant = require("./participant.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/participant", participant);

module.exports = router;
