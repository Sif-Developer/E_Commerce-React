const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,

        token: action.payload.token,
      };
    case "REGISTER_USER":
      return {
        ...state,
        message: action.payload,
      };
      case "LOGOUT":
        return{
          ...state,
          token:null
        }

    default:
      return state;
  }
};

export default users;
