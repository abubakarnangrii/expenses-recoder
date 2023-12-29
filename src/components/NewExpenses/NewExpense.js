import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enterExpenseData) => {
      const expenseData = {
        ...enterExpenseData,
        id : Math.random().toString()
      };
    props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expenses'>
      <ExpenseForm onSaveExpense={saveExpenseDataHandler}/>
    </div>
  )
}
