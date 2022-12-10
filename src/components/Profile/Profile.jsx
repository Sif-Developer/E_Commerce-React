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
  {console.log()}
  {/* {!user ? <Spin size="large"/>: <p>{user.name}</p>}
  <p>{user}</p> */}
  </div>
  )
};

export default Profile;
