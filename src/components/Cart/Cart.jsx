import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Context/ProductContext/ProductsState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>The cart is empty</span>;
  }

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>

        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });

  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
    </div>
  );
};

export default Cart;
