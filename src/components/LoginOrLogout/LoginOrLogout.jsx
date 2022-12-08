import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";
import Login from "../Login/Login";
import LogoutModal from "../Logout/Logout";
import Register from "../Register/Register";



const LoginOrLogout = () => {
    const { token } = useContext(UserContext);
  
    if (token) {
      return <LogoutModal /> 
    } else {
      return (
      <>
      <Login/>
      <Register/>
      </>
        )
    }
  };

export default LoginOrLogout