import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  token: token ? token : null,
  user: user ? user : null,
};



const API_URL = "http://localhost:3000";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  
  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/loginUser", user);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user",JSON.stringify(res.data.user))
    }
  };

  const getUser = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.get(API_URL + "/users/getUsers", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
    return res;
  };
  const getUserLogged = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.get(API_URL + "/users/getUserLogged", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_LOGGED_INFO",
      payload: res.data,
    });
    return res;
  };




  const registerUser = async (user) => {
    const res = await axios.post(API_URL + "/users/createUser", user);
    dispatch({
      type: "REGISTER_USER",
      payload: res.data.message,
    });
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
   
    const res = await axios.delete(API_URL + "/users/logoutUser", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      localStorage.removeItem("user")
     
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUser,
        registerUser,
        logout,
        getUserLogged,
      }}>
      {children}

    </UserContext.Provider>
  );
};
