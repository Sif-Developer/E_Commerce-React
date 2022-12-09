import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../Context/ProductContext/ProductsState";
import "./Products.scss";
import undefined from "../../assets/images/undefined.jpg";

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = products.map((product) => {
    return (
      <div className="product-box" key={product.id}>
        <h3>{product.name}</h3>

        <img src={undefined} className="productimg" alt="news"></img>

        <span> Price: {product.price.toFixed(2)} €</span>

        <span>{product.description}</span>

        <button onClick={() => addCart(product)}>Add Cart</button>
      </div>
    );
  });

  return <div className="product-container">{product}</div>;
};

export default Products;
