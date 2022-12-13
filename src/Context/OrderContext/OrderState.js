import axios from "axios";
import { createContext } from "react";


const API_URL = "http://localhost:3000";

export const OrdersContext = createContext();

export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const cart = JSON.parse(localStorage.getItem("cart"))
    try {
      await axios.post(
        API_URL + "/orders/createOrderProduct",
        { Products: cart.id },
        { headers: { authorization: token } }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};