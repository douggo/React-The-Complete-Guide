import React, { useState } from "react";
import FormExpense from "./FormExpense";
import './NewExpense.css'

const NewExpense = props => {
  const [isFormVisible, setIsFormVisible] = useState(false),
  
  saveExpenseDataHandler = enteredExpenseData => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expense);
    setIsFormVisible(false);
  };

  let content = <FormExpense 
    onSaveExpenseData={saveExpenseDataHandler} 
    onClickCancelExpense={() => setIsFormVisible(false)} 
  />;

  if(!isFormVisible) {
    content = <button type="button" onClick={() => setIsFormVisible(true)}>Add New Expense</button>
  }
  return (
    <div className="new-expense">
      {content}
    </div>
  );

}

export default NewExpense;