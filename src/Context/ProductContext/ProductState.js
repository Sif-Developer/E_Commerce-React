import { createContext, useReducer } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const initialState = {
  products: [],
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getAllProducts");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };
  return (
    <ProductsContext.Provider
      value={{
        product: state.products,
        getProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
