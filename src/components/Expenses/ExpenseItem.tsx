import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props: { 
    title: string,
    amount: number,
    date: Date 
}): JSX.Element => {

    const [title, setTitle] = useState<string>(props.title);

    const handleClick = (): void => {
        setTitle('Updated!');
        console.log('Cliked!!!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;