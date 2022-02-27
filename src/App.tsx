import React from 'react';

import Expenses from './components/Expenses/Expenses';
import { Expense } from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { 
      title: 'Car Insurance', 
      amount: 294.67, date: 
      new Date(2022, 2, 20)
    },
    { 
      title: 'New Refrigirator', 
      amount: 850.00, 
      date: new Date(2021, 6, 25) 
    },
    { 
      title: 'Juice', 
      amount: 1.76, 
      date: new Date(2022, 2, 20) 
    },
    { 
      title: 'Curtains', 
      amount: 66.78, 
      date: new Date(2022, 2, 20) 
    },
  ];

  const handleAddExpense = (expense: Expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
