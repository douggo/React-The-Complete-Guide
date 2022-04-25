import React from "react";
import './ExpenseDate.css';

const ExpenseDate = props => {
  const Date = {
    day  : props.date.toLocaleString('pt-BR', { day: '2-digit' }),
    month: props.date.toLocaleString('pt-BR', { month: 'long' }),
    year : props.date.getFullYear()
  }
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{Date.month}</div>
      <div className='expense-date__day'>{Date.day}</div>
      <div className='expense-date__year'>{Date.year}</div>
    </div>
  );
}

export default ExpenseDate;