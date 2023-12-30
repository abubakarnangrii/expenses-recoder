import React, { useState } from 'react'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import ExpenseList from './ExpensesList/ExpenseList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    const filterExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filterExpenses}/>
            {filterExpenses.amount}
            <ExpenseList item={filterExpenses}/>
        </div>
    );
};