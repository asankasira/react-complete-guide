import {useState} from "react";

import './Expenses.css'
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {

    const [filterYear, setFilterYear] = useState(2020);
    const filterYearHandler = (year) => {
        setFilterYear(year);
        props.onYearFilter(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedVal={filterYear} onFiltered={filterYearHandler}/>
                {props.expenses.map(item => <ExpenseItem key={item.id} {...item}/>)}
            </Card>
        </div>
    );
}