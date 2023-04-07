import './Expenses.css'
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(item => <ExpenseItem key={item.id} {...item}/>)}
        </Card>
    );
}