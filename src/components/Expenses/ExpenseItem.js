import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = props => {
  return (
    <Card className=' expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.description}</h2>
        <div className='expense-item__price'>${props.value}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;