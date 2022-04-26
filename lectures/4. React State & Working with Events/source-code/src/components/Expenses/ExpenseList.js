import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = props => {
  return (
    <Card className=' expenses'>
      {
        props.expenses.map(expense => {
          return <ExpenseItem key={expense.key} description={expense.description} date={expense.date} value={expense.value} />
        })
      }
    </Card>
  );
  
}

export default ExpenseList;