import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

const Register = () => {
  // Estado para controlar si el modal se encuentra abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Muestra el modal al hacer click en el botón "Register"
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Oculta el modal al hacer click en "OK"
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // Oculta el modal al hacer click en "Cancel"
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Función que se ejecuta cuando se hace submit del formulario
  const onFinish = (values) => {
    console.log("Success:", values);
    //Esto sirve para que cuando le acabe el formulario (si no hay errores) se cierre automáticamente
    setIsModalOpen(false)
  };

  // Función que se ejecuta si falla el submit del formulario
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {/* Botón que muestra el modal al hacer click en él */}
      <Button type="primary" onClick={showModal}>
        Register
      </Button>

      {/* Modal que contiene el formulario */}
      <Modal
        title="Modal Register"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">

          {/* Campo de name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please type your name!" }]}>
            <Input />
          </Form.Item>

          {/* Campo de email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please type your email!" }]}>
            <Input />
          </Form.Item>

          {/* Campo de password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please type your password!" }]}>
            <Input />
          </Form.Item>

          {/* Campo de phone */}
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please type your phone number!" },
            ]}>
            <Input />
          </Form.Item>

          {/* Campo de adress */}
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please type your adress!" }]}>
            <Input />
          </Form.Item>

          {/* Botón de submit */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
