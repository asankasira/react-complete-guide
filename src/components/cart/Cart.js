import {useContext, useState} from "react";

import styles from './Cart.module.css'
import {Modal} from "../ui/Modal";
import {CartContext} from "../../store/cart-context";
import {CartItem} from "./CartItem";
import {Checkout} from "./Checkout";

export const Cart = (props) => {
    const [proceedOrder, setProceedOrder] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [reqError, setReqError] = useState();

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

    const modalActionButtons = (
        <div className={styles.actions}>
            <button className={styles['button-alt']} onClick={props.onCartHide}>Close</button>
            {hasItems &&
                <button className={styles.button} onClick={() => setProceedOrder(true)}>Order</button>}
        </div>
    );

    const submitOrderHandler = async (userData) => {
        try {
            const resp = await fetch("https://react-http-7414c-default-rtdb.asia-southeast1.firebasedatabase.app/order.json", {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items,
                    total
                })
            });

            await resp.json();
            setSuccess(true);
            cartCtx.clearItems();
        } catch (err) {
            setSuccess(false);
            setReqError(err.message);
        }
    }

    if(isSuccess) {
        return (
            <Modal onBackdropClick={props.onCartHide}>
                <div>Successfully submitted the order!</div>
            </Modal>
        )
    }

    if(reqError) {
        return (
            <Modal onBackdropClick={props.onCartHide}>
                <div className={styles.orderError}>{reqError}</div>
            </Modal>
        )
    }

    return (
        <Modal onBackdropClick={props.onCartHide}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            {proceedOrder && <Checkout onCancel={props.onCartHide} onConfirm={submitOrderHandler}/>}
            {!proceedOrder && modalActionButtons}
        </Modal>
    )
}