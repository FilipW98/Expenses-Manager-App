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
			<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
			<ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
			<ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
			<ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
		</Card>
		</div>
	);
}

export default Expenses;
