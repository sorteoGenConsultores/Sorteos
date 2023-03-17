const initialSate = {
    participant: [],
  };
  
  function rootReducer(state = initialSate, action) {
    switch (action.type) {
      case "CREATE_PARTICIPANT":
        return {
          ...state,
        };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;