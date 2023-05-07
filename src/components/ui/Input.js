import React from "react";
import styles from './Input.module.css'

export const Input = React.forwardRef((props, ref) => {
    const {inputData, label: l} = props;

    return (
        <div className={styles.input}>
            <label htmlFor={inputData.id}>{l}</label>
            <input ref={ref} {...inputData}/>
        </div>
    )
});