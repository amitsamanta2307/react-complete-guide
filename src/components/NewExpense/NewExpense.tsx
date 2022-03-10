import React, { useState } from 'react';
import ExpenseForm, { Expense } from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props: {
    onAddExpense: (expense: Expense) => void
}): JSX.Element => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleSaveExpenseData = (enteredExpenseData: Expense) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleStopEditing = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={handleStartEditing}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={handleSaveExpenseData}
                    onStopEditing={handleStopEditing} 
                />
            )}
        </div>
    );
};

export default NewExpense;