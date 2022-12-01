import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Header.css";
import Login from "../Login/Login";
import { UserProvider } from "../../Context/UserContext/UserState";

const Header = () => {
  return (
    <header>
      <h1 className="header">
        <div className="loginBtn">
        <UserProvider>
          <Login />
        </UserProvider>
        </div>
      </h1>
      <nav>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
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
