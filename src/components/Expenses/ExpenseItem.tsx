import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.scss';
import Card from '../UI/Card';

interface ExpenseItemProps {
	title: string;
	amount: number;
	date: Date;
}

const ExpenseItem = (props: ExpenseItemProps) => {
	return (
		<li>
		<Card className='expense-item'>
			<ExpenseDate date={props.date}/>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>{props.amount}zł</div>
			</div>
		</Card>
		</li>
	);
}

export default ExpenseItem;
