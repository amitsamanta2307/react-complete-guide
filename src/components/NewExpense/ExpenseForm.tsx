import React, { ChangeEvent, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (): JSX.Element => {

    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('');
    const [enteredDate, setEnteredDate] = useState<string>('');
    
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Enter title" onChange={handleTitleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" placeholder="Enter amount" onChange={handleAmountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2030-12-31" placeholder="Enter date" onChange={handleDateChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;