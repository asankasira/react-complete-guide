import React, {useState} from "react";

import './ExpenseItem.css'
import {ExpenseDate} from "./ExpenseDate";
import Card from "../ui/Card";

export default function ExpenseItem(props) {
    const {title, amount, date} = props;
    const [itemTitle, setItemTitle] = useState();

    const clickHandler = ()  => {
        // console.log('Clicked');
        setItemTitle('Updated!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{itemTitle ?? title}</h2>
                <div className="expense-item__price">{`$${amount}`}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}