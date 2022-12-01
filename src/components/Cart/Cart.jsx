import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext/ProductsState";


const Cart = () => {

    const { cart } = useContext(ProductsContext);

    if (cart.length <= 0) {

        return <span>You need atleast one product</span>;

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

        </div>

    );

};

export default Cart;