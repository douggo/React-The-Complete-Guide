import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = props => {
  const [description, setDescription] = useState(props.description);

  const clickHandler = () => {
    setDescription('Updated!');
    console.log(description);
  };

  return (
    <li>
      <Card className=' expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{description}</h2>
          <div className='expense-item__price'>${props.value}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;