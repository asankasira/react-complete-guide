
import styles from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../store/cart-context";
import {CartIcon} from "../cart/CartIcon";

export const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const [isBump, setBump] = useState(false);

    const {items} = cartCtx;
    useEffect(() => {
        items.length > 0 && setBump(true);
        const timer = setTimeout(() => setBump(false), 350);
        return () => clearTimeout(timer);
    }, [items])


    const numOfCartItems = items.reduce((currItems, item) => currItems + item.amount, 0);
    const btnClass = `${styles.button} ${isBump && styles.bump}`;

    return (
        <button className={btnClass} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numOfCartItems}</span>
        </button>
    )
}