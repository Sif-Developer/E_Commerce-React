import "./Profile.scss";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";

const Profile = () => {
  const { user, getUserLogged, OrdersNamed } = useContext(UserContext);

  
  
  
  
  
  useEffect(() => {
    getUserLogged();
  }, []);
  
  const imageUrl = "http://localhost:3000/images/users/" + user.image;
  
  
  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={imageUrl} className="userimg" alt="userimg"></img>
      <span>Address: {user.address}</span>
      <span>Phone: {user.phone}</span>
      <span>Role: {user.role}</span>
      <span>
        Orders :
          {user.Orders?.map((order) => order.Products?.map(product => <p> Order:  {product.name}</p>))}
      </span>
    </div>
  );
};

export default Profile;
