import classes from "./Cart.module.css"
import Modal from "../../UI/Modal"
import { useContext } from "react"
import CartContext from "../../store/CartContext"
import CartItem from "./CartItem"

const Cart = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };


    const cartItems = cartCtx.items.map((value) => (
        <CartItem 
            key={value.id} 
            name={value.name} 
            amount={value.amount} 
            price={value.price} 
            onRemove={cartItemRemoveHandler.bind(null, value.id)}
            onAdd={cartItemAddHandler.bind(null, value)}  
        />

    ))

    return (
        <Modal onClose={props.onHide}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart