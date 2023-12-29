
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import React,{useState} from 'react';

const INITIAL_EXPENSE = [
  {
    id: '0.3453',
    date: new Date(2022, 8, 27),
    title: "Car Payment",
    price: "$242.56",
  },
  {
    id: '0.3154',
    date: new Date(2022, 2, 2),
    title: "Phone Payment",
    price: "$298.56",
  },
  {
    id: '0.7623',
    date: new Date(2021, 12, 28),
    title: "Food",
    price: "$120.56",
  },
  {
    id: '0.2565',
    date: new Date(2020, 5, 12),
    title: "Cloths",
    price: "$261.56",
  },
];

function App() {
const [expensesData,setExpenses] = useState(INITIAL_EXPENSE);


  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses)=>{
        console.log(expense);
        console.log(prevExpenses);
        return [expense,...prevExpenses];
      });
  };
  return (
    <div>
      <h1 className='Expense-item-title'>Expense Item</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="App">
        <Expenses item={expensesData} />
      </div>
    </div>

  );
}

export default App;
