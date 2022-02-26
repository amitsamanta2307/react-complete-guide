import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (): JSX.Element => {

    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('');
    const [enteredDate, setEnteredDate] = useState<string>('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredTitle: event.target.value
        // }));
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseData);

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
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;