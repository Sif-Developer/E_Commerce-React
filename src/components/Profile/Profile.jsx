import { Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";


const Profile = () => {
    
const userLS = JSON.parse(localStorage.getItem("user"));


  const { user, getUser } = useContext(UserContext);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>{userLS.name}</p>
      <p>{userLS.email}</p>
      <p></p>
    </div>
  );
};

export default Profile;
