import React, { useState } from 'react';

import './Expenses.scss';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

interface ExpensesProps {
	items: Array<{
		title: string;
		amount: number;
		date: Date;
	}>;
}

function Expenses(props: ExpensesProps) {
	const [enteredYear,setYear] = useState('2021');

	const setYearHandler = (selectedYear: string) => {
	console.log("im in expenses component");
	setYear(selectedYear);
	}


	return (
		<div>
			<Card className='expenses'>
			<ExpensesFilter selected={enteredYear} onSetYear={setYearHandler}/>
			{props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
		</Card>
		</div>
	);
}

export default Expenses;
