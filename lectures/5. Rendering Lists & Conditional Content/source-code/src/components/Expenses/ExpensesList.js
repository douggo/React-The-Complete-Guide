import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses were found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {
        props.items.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              description={expense.description}
              date={expense.date}
              value={expense.value}
            />
          );
        })
      }
    </ul>
  );
}

export default ExpensesList;