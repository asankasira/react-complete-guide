import {useState} from "react";

import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

    const [showForm, setShowForm] = useState(false);
    const addNewExpenseHandler = (expense) => {
        const newExp = {...expense, id: Math.random().toString()}
        props.onAddExpense(newExp);
    }

    return <div className={"new-expense"}>
        {showForm ? <ExpenseForm onCreateExpense={addNewExpenseHandler} onCancel={() => setShowForm(false)}/> :
            <button onClick={() => setShowForm(true)}>Add New Expense</button>}
    </div>
}

export default NewExpenses;