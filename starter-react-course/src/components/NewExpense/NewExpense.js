import React, { useState } from 'react';

import ExpenseForm from "./ExpenseForm.js";
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setHideNewExpenseForm(true);
  };

  const [hideNewExpenseForm, setHideNewExpenseForm] = useState(true);

  const newExpenseButtonClickHandler = () => {
    setHideNewExpenseForm(false);
  };

  const stopEditingHandler = () => {
    setHideNewExpenseForm(true);
  };
  return (
    <div className="new-expense">
      {hideNewExpenseForm && <button type='button' onClick={newExpenseButtonClickHandler}>Add New Expense</button>}
      {!hideNewExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
