import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
    const addNewExpenseHandler = (expense) => {
        const newExp = {...expense, id: Math.random().toString()}
        props.onAddExpense(newExp);
    }

    return <div className={"new-expense"}>
        <ExpenseForm onCreateExpense={addNewExpenseHandler}/>
    </div>
}

export default NewExpenses;