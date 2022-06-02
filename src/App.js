import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id          : 1,
    description : 'Car Insurance',
    date        : new Date(2022, 2, 19),
    value       : 264.97
  },
  {
    id          : 2,
    description : 'Guitar Reformation',
    date        : new Date(2022, 3, 20),
    value       : 165.99
  },
  {
    id          : 3,
    description : 'Supermarket',
    date        : new Date(2020, 3, 21),
    value       : 300.00
  }
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;