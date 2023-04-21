import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    const expenses = props.items;
    if (expenses.length === 0) {
        return <h2 className={"expenses-list__fallback"}>No Expenses Found</h2>
    }

    return (<ul className={"expenses-list"}>
        {expenses.map(item => <ExpenseItem key={item.id} {...item}/>)}
    </ul>)
}

export default ExpensesList;