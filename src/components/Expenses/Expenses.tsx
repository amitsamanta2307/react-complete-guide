import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

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

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onFilterChange={handleFilterChange}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;