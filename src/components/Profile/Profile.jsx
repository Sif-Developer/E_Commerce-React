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

  const imageUrl = "http://localhost:3000/images/users/" + userLS.image

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: {userLS.name}</p>
      <p>Email: {userLS.email}</p>
      <img src={imageUrl}  className="userimg" alt="userimg"></img>
      <span>Address: {userLS.address}</span>
      <span>Phone: {userLS.phone}</span>
      <span>Role: {userLS.role}</span>
    </div>
  );
};

export default Profile;
