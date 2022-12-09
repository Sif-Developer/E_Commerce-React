import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import LoginOrLogout from "../LoginOrLogout/LoginOrLogout";

const Header = () => {
  return (
    <header>
      <img src={logo} className="headerlogo" alt="news"></img>

      <nav>
        <Menu className="menuNav" mode="horizontal">
          <>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="products" icon={<ShoppingOutlined />}>
              <Link to="/products">Products</Link>
            </Menu.Item>

            <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Cart</Link>
            </Menu.Item>

            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
              <LoginOrLogout />
            </Menu.Item>
          </>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
