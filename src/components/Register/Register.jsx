import React, { useState, useRef } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    registerUser(values)
   
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  
  const formRef = useRef();

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>

      <Modal
        title="Register"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          ref={formRef}>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please type your name!",
                type: "text"
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please type your email!",
                type: "email",
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please type your password!",
                type: "text"
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please type your phone number!",
                type: "text"
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please type your address!",
                type: "text"
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please type your image!",
                type: "file",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="primary"
              htmlType="button"
              onClick={() => formRef.current.resetFields()}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
