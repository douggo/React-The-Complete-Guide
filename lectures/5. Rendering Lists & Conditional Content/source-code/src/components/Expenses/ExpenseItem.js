import React/*, { useState }*/ from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = props => {
  /*
  const [description, setDescription] = useState(props.description);
  const clickHandler = () => {
    setDescription('Updated!');
    console.log(description);
    <button onClick={clickHandler}>Change title</button>
  };
  */

  return (
    <li>
      <Card className=' expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.description}</h2>
          <div className='expense-item__price'>${props.value}</div>
        </div>        
      </Card>
    </li>
  );
}

export default ExpenseItem;