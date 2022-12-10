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
import Register from "../Register/Register";
import LogoutModal from "../Logout/Logout";
import Login from "../Login/Login";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";

const Header = () => {
  const { token } = useContext(UserContext);
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
            </Menu.Item>
          </> 
          {token ? (
            <Menu.Item>
              <LogoutModal />
            </Menu.Item>
          ) : (
            <Menu.Item>
              <Register />
              <Login />
            </Menu.Item>
          )}
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
