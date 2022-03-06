import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props: {
    items: Array<{
        id: string,
        title: string,
        amount: number,
        date: Date
    }>
}): JSX.Element => {
    const [filterYear, setFilterYear] = useState<string>('2020');

    const handleFilterChange = (selectedYear: string) => {
        setFilterYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onFilterChange={handleFilterChange}
                />
                {<ExpensesList items={filterExpenses} />}
            </Card>
        </div>
    );
};

export default Expenses;