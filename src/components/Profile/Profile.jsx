import "./Profile.scss";
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
    <div className="profile">
    <div className="profile-container">
      <h2>Your Profile</h2>
      <span><b>Name: </b>{userLS.name}</span>
      <span><b>Email: </b> {userLS.email}</span>
      <img src={imageUrl}  className="userimg" alt="userimg"></img>
      <span><b>Address:</b> {userLS.address}</span>
      <span><b>Phone: </b> {userLS.phone}</span>
      <span><b>Role: </b>{userLS.role}</span>
    </div>
    </div>
  );
};

export default Profile;
