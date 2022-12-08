import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Header.scss";
import Login from "../Login/Login";
import logo from "../../assets/images/logo.png";
import Register from "../Register/Register";
import { UserProvider } from "../../Context/UserContext/UserState";
import Logout from "../Logout/Logout";
import LogoutModal from "../Logout/Logout";

const Header = () => {
  return (
    <header>
      <img src={logo} className="headerlogo" alt="news"></img>

      <nav>
        <Menu className="menuNav" mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <>
            <Menu.Item key="products" icon={<HomeOutlined />}>
              <Link to="/products">Products</Link>
            </Menu.Item>

            <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Cart</Link>
            </Menu.Item>

            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
              <UserProvider>
                <Login />
                <LogoutModal />
                <Register />
              </UserProvider>
            </Menu.Item>
            
          </>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
