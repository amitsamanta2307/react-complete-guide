import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import { Expense } from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES: Array<{ id: string, title: string, amount: number, date: Date}> = [
  {
    id: '5add476a-9446-41e1-a5b3-dd7ed1b79a3b',
    title: 'Car Insurance', 
    amount: 294.67, 
    date: new Date(2022, 2, 20)
  },
  {
    id: 'a7293af3-20d9-4524-94cb-4c8cec1efeb1',
    title: 'New Refrigirator', 
    amount: 850.00, 
    date: new Date(2021, 6, 25) 
  },
  {
    id: '2977811c-b140-4439-a2e9-fcf2879ab8e9',
    title: 'Juice', 
    amount: 1.76, 
    date: new Date(2022, 2, 20) 
  },
  {
    id: '7ff9e6d2-22ed-4f04-a2aa-26947019629a',
    title: 'Curtains', 
    amount: 66.78, 
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
