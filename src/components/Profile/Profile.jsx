import "./Profile.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";
import { Button, Modal } from "antd";


const Profile = () => {

  const { user, getUserLogged} = useContext(UserContext);

  const YourOrdersButton = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
      setVisible(true);
    };

    const handleOk = () => {
      setVisible(false);
    };

    const handleCancel = () => {
      setVisible(false);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Your Orders
        </Button>
        <Modal
          title="Your Orders"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}>
          {user.Orders?.map((order) =>
            order.Products?.map((product) => <p>{product.name}</p>)
          )}
        </Modal>
      </>
    );
  };

  useEffect(() => {
    getUserLogged();
  }, []);
  
  const imageUrl = "http://localhost:3000/images/users/" + user.image;
  
  
  
  return (
    <div className="profile">
    <div className="profile-container">
  
      <h2>Your Profile</h2>
      <span><b>Name: </b>{user.name}</span>
      <span><b>Email: </b> {user.email}</span>
      <img src={imageUrl}  className="userimg" alt="userimg"></img>
      <div>Address: {user.address}</div>
      <div>Phone: {user.phone}</div>
      <spa>Role: {user.role}</spa>
      <div>
        {console.log(YourOrdersButton)}
        <YourOrdersButton />
      </div>
    </div>
    </div>
  );
};

export default Profile;
