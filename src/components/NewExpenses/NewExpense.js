import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
  const [isEditing,setIsEditing]=useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
      const expenseData = {
        ...enterExpenseData,
        id : Math.random().toString()
      };
    props.onAddExpense(expenseData);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-expenses'>
      {!isEditing && (
        <button className='add-new__expenses' onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}
