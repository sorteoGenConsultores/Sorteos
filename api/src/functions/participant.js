const { Participants } = require("../db");

const findParticipantByEmail = async (email) => {
  try {
    const userFound = await Participants.findByPk(email);
    if (userFound !== null) {
      return userFound.dataValues;
    } else {
      console.log(userFound);
      // return nullUser;
    }
  } catch (error) {
    console.log(
      "El error functions participants findUserByEmail es:",
      error.message
    );
    res
      .status(401)
      .send(
        "El error functions participants findUserByEmail es:",
        error.message
      );
  }
};
module.exports = {
  findParticipantByEmail,
};
