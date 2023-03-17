import axios from "axios";

export function createParticipant(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/participant", payload);
      return dispatch({
        type: "CREATE_PARTICIPANT",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
