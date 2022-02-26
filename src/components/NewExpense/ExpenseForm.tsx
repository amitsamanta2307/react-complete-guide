import React
 from 'react';
import './ExpenseForm.css';

const ExpenseForm = (): JSX.Element => {
    
    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Enter title" onChange={handleChangeTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" placeholder="Enter amount" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2030-12-31" placeholder="Enter date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;