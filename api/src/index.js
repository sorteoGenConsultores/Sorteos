const { Router } = require("express");
const participants = require("./routes/participants.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/participants", participants);

module.exports = router;
