import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year =props.date.getFullYear();
  return (
    <div className='date'>
        <div className='month'>{month}</div>
        <div className='year'>{year}</div>
        <div className='day'>{day}</div>
    </div>
  )
}
