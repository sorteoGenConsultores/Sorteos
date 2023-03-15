const { Participant } = require("../db");

const postParticipant = async (req, res) => {
  try {
    const { email, name, cellphone, oportunities } = req.body;
    if (!email || !name || !cellphone) {
      return res.status(428).send("Falta enviar datos obligatorios");
    }
    const bodyInfo = {
      email,
      name,
      cellphone,
      oportunities,
    };
    let participant = await Participant.findByPk(email);
    if (participant) {
      return res.status(401).json("el participante ya esta registrado");
    }
    let createdParticipant = await Participant.create(bodyInfo);
    res.status(201).json(createdParticipant); //201 es que fue creado
  } catch (error) {
    console.log("El error controllers user postParticipant es:", error.message);
    res
      .status(401)
      .send("El error controllers user postParticipant es:", error.message);
  }
};
module.exports = {
  postParticipant,
};
