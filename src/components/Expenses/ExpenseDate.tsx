import "./ExpenseDate.scss"

function ExpenseDate(props:{date:Date}) {
	const month =
		props.date.toLocaleString('pl', { month: 'long' }).charAt(0).toUpperCase() +
		props.date.toLocaleString('pl', { month: 'long' }).slice(1);
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString('pl', { day: '2-digit' });

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
}

export default ExpenseDate;
