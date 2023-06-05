import React, { useState } from 'react';

import './ExpenseForm.scss';

interface ExpenseFormProps {
	onSaveExpenseData: (enteredExpenseData: {
	  title: string;
	  amount: number;
	  date: Date;
	}) => void;
  }

const ExpenseForm = (props: ExpenseFormProps) => {
	const [enteredTitle, setTitle] = useState('');
	const [enteredAmount, setAmount] = useState('');
	const [enteredDate, setDate] = useState('');

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value);
	};

	const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	};

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: parseFloat(enteredAmount),
			date: new Date(enteredDate),
		};
       props.onSaveExpenseData(expenseData);
	   console.log("im in exenseForm");
        setTitle('')
		setAmount('')
		setDate('')
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date'value={enteredDate} min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
