import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    return (
        <li>
            <div className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__details'>
                    <div className='expense-item__description'>{title}</div>
                    <div className='expense-item__price'>{'$'+price}</div>
                </div>
            </div>
        </li>
    );
}

export default ExpenseItem;
