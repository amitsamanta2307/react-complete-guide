import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './ExpenseForm.css';

export type Expense = {
    id: string,
    title: string,
    amount: number,
    date: Date,
};

const ExpenseForm = (props: {
    onSaveExpenseData: (enteredExpenseData: Expense) => void,
    onStopEditing: () => void
}): JSX.Element => {

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

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const expenseData = {
            id: uuidv4(),
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        // Clear inputs
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text"
                        placeholder="Enter title"
                        value={enteredTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="Enter amount"
                        value={enteredAmount}
                        onChange={handleAmountChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2030-12-31"
                        placeholder="Enter date"
                        value={enteredDate}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="reset" onClick={props.onStopEditing}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;