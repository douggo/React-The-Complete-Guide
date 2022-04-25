import React from "react";
import FormExpense from "./FormExpense";
import './NewExpense.css'

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = enteredExpenseData => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log('In NewExpense.js:');
    console.log(expense);
    props.onAddExpense(expense);
  }

  return (
    <div className="new-expense">
      <FormExpense onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );

}

export default NewExpense;