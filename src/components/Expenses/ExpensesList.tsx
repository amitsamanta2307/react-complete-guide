import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props: {
    items: Array<{
        id: string,
        title: string,
        amount: number,
        date: Date
    }>
}): JSX.Element => {

    if (props.items.length === 0) {
        return <h3 className="expenses-list__fallback">Found no expenses</h3>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;