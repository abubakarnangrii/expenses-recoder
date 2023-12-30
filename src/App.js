
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import React,{useState} from 'react';

const INITIAL_EXPENSE = [
  {
    id: '0.87231',
    date: new Date(2022, 8, 27),
    title: "Car Payment",
    price: 242.56,
  },
  {
    id: '0.3154',
    date: new Date(2022, 2, 2),
    title: "Phone Payment",
    price: 298.56,
  },
  {
    id: '0.3453',
    date: new Date(2022, 7, 2),
    title: "Laptop Payment",
    price: 212.56,
  },
  {
    id: '0.75344',
    date: new Date(2022, 4, 14),
    title: "Charger Payment",
    price: 28.56,
  },
  {
    id: '0.7623',
    date: new Date(2021, 12, 28),
    title: "Food",
    price: 120.56,
  },
  {
    id: '0.2565',
    date: new Date(2020, 5, 12),
    title: "Cloths",
    price: 261.56,
  },
  {
    id: '0.5665',
    date: new Date(2020, 7, 26),
    title: "Shoes",
    price: 56.56,
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
      <h1 className='expense-item-title'>Expense Item</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="App">
        <Expenses item={expensesData} />
      </div>
    </div>

  );
}

export default App;
