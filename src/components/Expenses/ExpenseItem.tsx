import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.scss';
import Card from '../UI/Card';

interface ExpenseItemProps {
	title: string;
	amount: number;
	date: Date;
}

const ExpenseItem = (props: ExpenseItemProps) => {

	const [title, setTitle] = useState(props.title)

	const clickHandler = () => {
		setTitle("Zmiana tytułu");
		console.log("Klik!!!!");
	}
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>{props.amount}zł</div>
			</div>
			<button onClick={clickHandler}>Zmień tytuł</button>
		</Card>
	);
}

export default ExpenseItem;
