import './ExpenseDate.css'

export function ExpenseDate(props) {

    const formatter = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    const [month, day, year] = formatter.format(props.date).split(' ');

    return (
        <div className={'expense-date'}>
            <div className={'expense-date__month'}>{month}</div>
            <div className={'expense-date__year'}>{year}</div>
            <div className={'expense-date__day'}>{day.slice(0, -1)}</div>
        </div>
    );
}