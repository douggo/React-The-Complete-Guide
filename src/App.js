import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date='19/03/2022' description='Car Insurance' value='294,67' />
      <ExpenseItem date='25/03/2022' description='Guitar' value='100' />
      <ExpenseItem date='30/03/2022' description='Pizza' value='5,55' />
    </div>
  );
}

export default App;
