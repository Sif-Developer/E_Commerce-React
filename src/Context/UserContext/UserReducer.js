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

    default:
      return state;
  }
};

export default users;
