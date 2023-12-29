import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    const filterExpenses = props.item.filter(expense =>{
        return expense.date.getFullYear().toString() ===filterYear;
    })

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />

            {filterExpenses.length === 0 ? <p>No expenses found.</p> :filterExpenses.map((expense) =>
                <ExpenseItem 
                    key={expense.id}
                    date={expense.date} 
                    title={expense.title} 
                    price={expense.price}/>
                )
            }  
            {/* <ExpenseItem date={props.item[0].date} title={props.item[0].title} price={props.item[0].price} />
            <ExpenseItem date={props.item[1].date} title={props.item[1].title} price={props.item[1].price} />
            <ExpenseItem date={props.item[2].date} title={props.item[2].title} price={props.item[2].price} />
            <ExpenseItem date={props.item[3].date} title={props.item[3].title} price={props.item[3].price} /> */}
        </div>
    )
}
