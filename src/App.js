import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={new Date(2020, 2, 19)} description='Car Insurance' value='294,67' />
      <ExpenseItem date={new Date(2020, 3, 20)} description='Guitar' value='100' />
      <ExpenseItem date={new Date(2020, 4, 21)} description='Pizza' value='5,55' />
    </div>
  );
}

export default App;
