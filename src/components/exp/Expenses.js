import {useState} from "react";

import './Expenses.css'
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {

    const [filterYear, setFilterYear] = useState(2020);
    const filterYearHandler = (year) => {
        setFilterYear(year);
    }

    const filteredExpenses = filterYear ? props.expenses.filter(e => e.date.getFullYear() === filterYear) : props.expenses;

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedVal={filterYear} onFiltered={filterYearHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}