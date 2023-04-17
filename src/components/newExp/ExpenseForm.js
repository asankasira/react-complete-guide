import {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [expDate, setExpDate] = useState('');

    const titleHandler = event => setTitle(event.target.value)
    const amountHandler = event => setAmount(+event.target.value)
    const expDateHandler = event => setExpDate(event.target.value)

    //using single state
    /*const [inputs, setExpInputs] = useState({
        title: '',
        amount: 0,
        expDate: ''
    });

    const titleHandler = event => {
        let val;
        setExpInputs(prevState => {
            val = {...prevState, title: event.target.value}
            console.log(val)
            return val;
        })
    }

    const amountHandler = event => {
        let val;
        setExpInputs(prevState => {
            val = {...prevState, amount: +event.target.value}
            console.log(val)
            return val;
        })
    }

    const expDateHandler = event => {
        let val;
        setExpInputs(prevState => {
            val = {...prevState, expDate: event.target.value}
            console.log(val)
            return val;
        })
    }*/

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const expense = {title, amount, date: new Date(expDate)};

        props.onCreateExpense(expense);

        setTitle('')
        setAmount('')
        setExpDate('')
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Title</label>
                    <input type={"text"} value={title} onChange={titleHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"} value={amount} onChange={amountHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Date</label>
                    <input type={"date"} min={"2019-01-31"} max={"2023-05-01"} value={expDate} onChange={expDateHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;