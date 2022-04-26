import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './ExpenseList.css';

const ExpenseList = props => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = year => {
    setFilteredYear(year);
    console.log(year);
  }

  return (
    <Card className=' expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        props.expenses.map(expense => {
          return <ExpenseItem key={expense.key} description={expense.description} date={expense.date} value={expense.value} />
        })
      }
    </Card>
  );
  
}

export default ExpenseList;