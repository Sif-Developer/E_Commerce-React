import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../Context/ProductContext/ProductsState";
import "./Products.scss";
import { Button, notification } from "antd";

const Products = () => {
    
  const handleAddToCart = (product) => {
    if (localStorage.getItem("token")) {
      addCart(product);
    } else {
      notification.warning({
        message: "You must be logged in to add a product to your cart",
      });
    }
  };

  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = products.map((product) => {

    const imageUrl = "http://localhost:3000/images/products/" + product.image

    return (
      <div className="product-box" key={product.id}>

        <h3>{product.name}</h3>

        <img src={imageUrl}  className="productimg" alt="productimg"></img>

        <span> Price: {product.price.toFixed(2)} €</span>

        <span>{product.description}</span>

        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
      </div>
    );
  });

  return <div className="product-container">{product}</div>;
};

export default Products;
