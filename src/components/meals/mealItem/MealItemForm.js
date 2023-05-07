import React from "react";
import styles from './MealItemForm.module.css'
import {Input} from "../../ui/Input";

export const MealItemForm = (props) => {

    const inputItemRef = React.createRef();

    const itemSubmitHandler = (event) => {
        event.preventDefault();

        const itemAmount = +inputItemRef.current.value;
        props.onCartAdd(itemAmount);
    }

    return (
        <form className={styles.form} onSubmit={itemSubmitHandler}>
            <Input ref={inputItemRef} label={"Amount"} inputData={{
                id: `amount-${props.id}`,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            />
            <button>+ Add</button>
        </form>
    )
}