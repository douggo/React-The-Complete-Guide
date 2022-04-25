import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <div className='expenses'>
      {
        props.expenses.map(expense => {
          return <ExpenseItem description={expense.description} date={expense.date} value={expense.value} />
        })
      }
    </div>
  );
  
}

export default ExpenseList;