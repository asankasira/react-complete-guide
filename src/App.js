import {useState} from "react";

import Expenses from "./components/exp/Expenses";
import NewExpenses from "./components/newExp/NewExpenses";

const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2022, 8, 13)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = () => {

    const [expList, setExpList] = useState(expenses);

    const addExpenseHandler = (newExp) => {
        setExpList(prevState => {
            const arr = [newExp, ...prevState];
            expenses.unshift(newExp);
            return arr;
        });
        console.log(newExp)
    }

    const addExpFilterHandler = (year) => {
        setExpList(year ? expenses.filter(e => e.date.getFullYear() === year) : expenses)
    }

    return (
        <div>
            <NewExpenses onAddExpense = {addExpenseHandler}/>
            <Expenses onYearFilter={addExpFilterHandler} expenses={expList}/>
        </div>
    );
}

export default App;
