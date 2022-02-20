import React from 'react';

import ExpenseItem from './components/ExpenseItem';

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

  return (
    <div>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
