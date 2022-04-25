import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <Card className=' expenses'>
      {
        props.expenses.map(expense => {
          return <ExpenseItem description={expense.description} date={expense.date} value={expense.value} />
        })
      }
    </Card>
  );
  
}

export default ExpenseList;