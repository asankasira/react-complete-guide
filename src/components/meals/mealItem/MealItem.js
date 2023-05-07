import {useContext} from "react";
import {CartContext} from "../../../store/cart-context";
import styles from './MealItem.module.css'
import {MealItemForm} from "./MealItemForm";

export const MealItem = (props) => {
    const {id, name, description, price} = props;
    const cartCtx = useContext(CartContext);

    const addItemsToCart = (amount) => {
        cartCtx.addItem({id, name, price, amount});
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm id={id} onCartAdd={addItemsToCart}/>
            </div>
        </li>
    );
}