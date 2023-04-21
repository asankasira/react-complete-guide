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
    {
        id: 'e5',
        title: 'Washing Machine',
        amount: 499.99,
        date: new Date(2020, 3, 9),
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
    }

    return (
        <div>
            <NewExpenses onAddExpense = {addExpenseHandler}/>
            <Expenses expenses={expList}/>
        </div>
    );
}

export default App;
