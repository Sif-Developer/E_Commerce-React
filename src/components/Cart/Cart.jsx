import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Context/ProductContext/ProductsState";
import './Cart.scss';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>The cart is empty</span>;
  }

  const cartItem = cart.map((cartItem, i) => {

    const imageUrl = "http://localhost:3000/images/products/" + cartItem.image

    return (
      <div className="cart" key={i}>

        <img src={imageUrl} className="productimg" alt="productimg"></img>

        <h3>{cartItem.name}</h3>

        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });

  return (
    <div className="containerCart">
      <div className="cartDiv">
        <h2>Your cart</h2>
        {cartItem}
        <button onClick={() => clearCart()}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
