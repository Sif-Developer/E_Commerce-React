import "./Profile.scss";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";

const Profile = () => {

  const { user, getUserLogged,OrdersNamed, getUser } = useContext(UserContext);
  useEffect(() => {
    getUserLogged();
  }, []);
  
  const imageUrl = "http://localhost:3000/images/users/" + user.image;
  
  
  return (
    <div className="profile">
    <div className="profile-container">
  
 {     console.log(OrdersNamed)}
      <h2>Your Profile</h2>
      <span><b>Name: </b>{user.name}</span>
      <span><b>Email: </b> {user.email}</span>
      <img src={imageUrl}  className="userimg" alt="userimg"></img>
      <span><b>Address:</b> {user.address}</span>
      <span><b>Phone: </b> {user.phone}</span>
      <span><b>Role: </b>{user.role}</span>
    </div>
    </div>
  );
};

export default Profile;
