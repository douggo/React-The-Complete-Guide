import React, { useState } from "react";
import './FormExpense.css';

const FormExpense = (props) => {
  const [enteredDescription, setEnteredDescription] = useState(''),
        [enteredValue, setEnteredValue] = useState(''),
        [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredDescription : '',
  //   enteredValue       : '',
  //   enteredDate        : ''
  // });

  const descriptionChangeHandler = event => {
    setEnteredDescription(event.target.value);

    // OR

    // setUserInput({
    //   ...userInput,
    //   enteredDescription : event.target.value
    // });

    // OR

    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredDescription : event.target.value
    //   }
    // });
  };

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
    
    // OR

    // setUserInput({
    //   ...userInput,
    //   enteredValue : event.target.value
    // });

    // OR

    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredValue : event.target.value
    //   }
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    
    // OR

    // setUserInput({
    //   ...userInput,
    //   enteredDate : event.target.value
    // });

    // OR
    
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredDate : event.target.value
    //   }
    // });
  };

  const submitHandler = event => {
    event.preventDefault();

    const newExpense = {
      description : enteredDescription,
      value       : +enteredValue,
      date        : new Date(enteredDate + 'T00:00:00') // in case if you live in Brazil
    };

    props.onSaveExpenseData(newExpense);

    setEnteredDescription('');
    setEnteredValue('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Description</label>
          <input type="text" value={enteredDescription} onChange={descriptionChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Value</label>
          <input type="number" min="0.01" step="0.01" value={enteredValue} onChange={valueChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onClickCancelExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default FormExpense;