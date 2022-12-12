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
        case "GET_USER_LOGGED_INFO":
        return{
          ...state,
          user:action.payload
        }

    default:
      return state;
  }
};

export default users;
