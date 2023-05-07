import {useContext} from "react";

import styles from './Cart.module.css'
import {Modal} from "../ui/Modal";
import {CartContext} from "../../store/cart-context";
import {CartItem} from "./CartItem";

export const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const total = `$${cartCtx.totalAmount.toFixed(2)}`

    const incrementItems = (item) => cartCtx.addItem({...item, amount: 1})
    const decrementItems = (id) => cartCtx.removeItem(id)

    const cartItems = <ul className={styles['cart-items']}>
        {cartCtx.items.map(item => <CartItem
            key={item.id}
            {...item}
            onRemove={decrementItems.bind(null, item.id)}
            onAdd={incrementItems.bind(null, item)}/>
        )}
    </ul>

    return (
        <Modal onBackdropClick={props.onCartHide}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']} onClick={props.onCartHide}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}