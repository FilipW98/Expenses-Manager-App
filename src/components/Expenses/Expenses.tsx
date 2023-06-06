import React, { useState } from 'react';

import './Expenses.scss';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

interface ExpensesProps {
	items: Array<{
		id: number| string;
		title: string;
		amount: number;
		date: Date;
	}>;
}

function Expenses(props: ExpensesProps) {
	const [enteredYear, setYear] = useState('2021');

	const setYearHandler = (selectedYear: string) => {
		console.log('im in expenses component');
		setYear(selectedYear);
	};
	const filteredExpenses = props.items.filter(expense => {
			return expense.date.getFullYear().toString() === enteredYear
		})
		
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={enteredYear} onSetYear={setYearHandler} />
				{filteredExpenses.map(expense => (
					<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
				))}
			</Card>
		</div>
	);
}

export default Expenses;
