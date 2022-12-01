import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserContext } from "../../Context/UserContext/UserState";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
  };

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

  useEffect(() => {
    const foundToken = JSON.parse(localStorage.getItem("token"));
    if (foundToken) {
      navigate("/profile")
    }

  }, [login])


  return (

    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal className="modal-form" open={open} title="Login to your user" onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button className="loginReturnBtn" key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button className="loginSendBtn" key="submit" type="primary" form="myform" value="Submit" htmlType="submit" loading={loading} onClick={handleOk}>
            Login
          </Button>
        ]}
      >
        <div className="container">
          <Form className="form-container" id="myform" name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label="Email" name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
              rules={[{ required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );

};


export default Login;