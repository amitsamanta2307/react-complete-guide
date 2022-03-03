import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props: {
    items: Array<{
        title: string,
        amount: string,
        date: Date
    }>
}): JSX.Element => {
    const [filterYear, setFilterYear] = useState<string>('2020');

    const handleFilterChange = (selectedYear: string) => {
        setFilterYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onFilterChange={handleFilterChange} />
                {props.items.map(expense => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;