import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css'

export default function ExpenseList(props) {

    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback '>No expenses found.</h2>
    }
  return (
    <ul className='expenses-list'>
          {props.item.map((expense) =>
              <ExpenseItem
                  key={expense.id}
                  date={expense.date}
                  title={expense.title}
                  price={expense.price}
              />
          )}
    </ul>
  )
}
