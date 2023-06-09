import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

interface Expense {
	id: string;
	title: string;
	amount: number;
	date: Date;
}

const DUMMY_EXPENSES = [
	{ id: 'e1', title: 'Toilet Paper', amount: 26.5, date: new Date(2023, 6, 6) },
	{ id: 'e2', title: 'New PC', amount: 3.499, date: new Date(2021, 5, 22) },
	{ id: 'e3', title: 'Car', amount: 20000, date: new Date(2023, 6, 28) },
	{ id: 'e4', title: 'Chair', amount: 450, date: new Date(2022, 6, 12) },
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense: Expense) => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
