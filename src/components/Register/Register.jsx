import React, { useState, useRef } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";
import "./Register.scss"
const Register = () => {
  const { registerUser } = useContext(UserContext);

  // Estado para controlar si el modal se encuentra abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Muestra el modal al hacer click en el botón "Register"
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Oculta el modal al hacer click en "Cancel"
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Función que se ejecuta cuando se hace submit del formulario
  const onFinish = (values) => {
    registerUser(values)
    //Esto sirve para que cuando se envíe el formulario (si no hay errores), se cierre automáticamente
    setIsModalOpen(false);
  };

  // Función que se ejecuta si falla el submit del formulario
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //Hace referencia al componente For ... Esto servirá para poder vacíar el formulario
  const formRef = useRef();

  return (
    <>
      {/* Botón que muestra el modal al hacer click en él */}
      <Button type="primary" className="registerButton" onClick={showModal}>
        Register
      </Button>

      {/* Modal que contiene el formulario */}
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
          {/* Campo de name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please type your name!" },
              { type: "text", message: "Please enter a valid name" },
            ]}>
            <Input />
          </Form.Item>

          {/* Campo de email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please type your email!" },
              { type: "email", message: "Please enter a valid email " },
            ]}>
            <Input />
          </Form.Item>

          {/* Campo de password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please type your password!" },
              { type: "text", message: "Please enter a valid  password" },
            ]}>
            <Input />
          </Form.Item>

          {/* Campo de phone */}
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please type your phone number!" },
              { type: "text", message: "Please enter a valid phone number" },
            ]}>
            <Input />
          </Form.Item>

          {/* Campo de address */}
          <Form.Item
            label="Address"
            name="address"
            rules={[
              { required: true, message: "Please type your address!" },
              { type: "text", message: "Please enter a valid address" },
            ]}>
            <Input />
          </Form.Item>

          {/*Campo de image*/}
          <Form.Item
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please type your image!" },
              {
                type: "text",
                message: "Please enter a valid image(only text right now)",
              },
            ]}>
            <Input />
          </Form.Item>

          {/* Botón de submit */}
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
