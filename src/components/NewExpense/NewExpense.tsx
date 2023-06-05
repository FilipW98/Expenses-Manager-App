import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

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
    
const saveExpenseDataHandler = (enteredExpenseData:ExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    console.log("Im in new");
    console.log(expenseData);
}
    return(
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;