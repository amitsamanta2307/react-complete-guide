import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import { Expense } from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES: Array<{ title: string, amount: string, date: Date}> = [
  { 
    title: 'Car Insurance', 
    amount: '294.67', 
    date: new Date(2022, 2, 20)
  },
  { 
    title: 'New Refrigirator', 
    amount: '850.00', 
    date: new Date(2021, 6, 25) 
  },
  { 
    title: 'Juice', 
    amount: '1.76', 
    date: new Date(2022, 2, 20) 
  },
  { 
    title: 'Curtains', 
    amount: '66.78', 
    date: new Date(2022, 2, 20) 
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = (expense: Expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
