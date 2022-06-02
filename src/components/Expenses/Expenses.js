import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const expensesFiltered = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className=" expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={expensesFiltered} />
      <ExpensesList items={expensesFiltered} />
    </Card>
  );
};

export default ExpenseList;
