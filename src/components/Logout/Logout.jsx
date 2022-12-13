import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { UserContext } from "../../Context/UserContext/UserState";
import "./Logout.scss"

const LogoutModal = () => {
  const { logout } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="logoutButton" type="primary" onClick={showModal}>
        Logout
      </Button>
      <Modal
        className="logout-modal"
        open={open}
        title="Logout"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}>
        <p>Are you sure you want to logout?</p>
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>
        <Button type="primary" onClick={logout}>
          Confirm
        </Button>
      </Modal>
    </>
  );
};

export default LogoutModal;
