import ExpenseList from "./components/Expenses/ExpenseList";

function App() {
  const expenses = [
    {
      key         : 1,
      description : 'Car Insurance',
      date        : new Date(2020, 2, 19),
      value       : 264.97
    },
    {
      key         : 2,
      description : 'Guitar Reformation',
      date        : new Date(2020, 2, 20),
      value       : 165.99
    },
    {
      key         : 3,
      description : 'Supermarket',
      date        : new Date(2020, 2, 21),
      value       : 300.00
    }
  ];
  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;