const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email, name, cellphone, oportunities } = req.body;
    if (!email || !name || !cellphone) {
      return res.status(428).send("Falta enviar datos obligatorios");
    }
    const oldUser = await findUserById(id);
    if (!oldUser) {
      return res.status(202).send("el usuario no existe");
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    updatePassword(id, hashedPassword);
    return res.status(200).send("Verificado");
  } catch (error) {
    res.status(400).send("Sin verificar");
  }
});

module.exports = router;
