import { Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";


const Profile = () => {
  const { user, getUser } = useContext(UserContext);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p></p>
    </div>
  );
};

export default Profile;
