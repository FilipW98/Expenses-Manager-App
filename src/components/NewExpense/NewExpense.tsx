import React, { useState } from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

interface ExpenseData {
	title: string;
	amount: number;
	date: Date;
}
interface Expense {
	id: string;
	title: string;
	amount: number;
	date: Date;
}
interface NewExpenseProps {
	onAddExpense: (expense: Expense) => void;
}

const NewExpense = (props: NewExpenseProps) => {
	const [isEditing, setIsEditig] = useState(false);

	const startEditingHandler = () => {
		setIsEditig(true);
	};
	const stopEditingHandler = () => {
		setIsEditig(false);
	};

	const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setIsEditig(false);
	};
	return (
		<div className='new-expense'>
			{!isEditing && (
				<button onClick={startEditingHandler} type='submit'>
					Add New Expense
				</button>
			)}
			{isEditing && (
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler}
             />)}
		</div>
	);
};

export default NewExpense;
