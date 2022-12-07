import React from "react";
import { Menu } from "antd";
import {HomeOutlined, UserOutlined, } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Header.scss";
import Login from "../Login/Login";
import { UserProvider } from "../../Context/UserContext/UserState";
import Register from "../Register/Register";

const Header = () => {
  return (
    <header>
      
        <div className="loginBtn">
        <UserProvider>
          <Login />
          <Register />
        </UserProvider>
        </div>
      
      <nav>
        <Menu  mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </>       
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
