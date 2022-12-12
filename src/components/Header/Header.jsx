import React, { useContext } from "react";
import { Menu } from "antd";
import { UserContext, } from "../../Context/UserContext/UserState";
import { HomeOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Header.scss";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Register from "../Register/Register";
import logo from "../../assets/images/logo.png"

const Header = () => {
  const { token } = useContext(UserContext);
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
          </>
          {token ? (
            <>
              <Menu.Item key="profile"  icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <Logout />
              </Menu.Item>
            </>
          ) : (
            <Menu.Item>
              <Register />
              <Login key="login" icon={<ShoppingCartOutlined />}/>
            </Menu.Item>
          )}
        </Menu>
      </nav>
    </header>

  );
};

export default Header;
