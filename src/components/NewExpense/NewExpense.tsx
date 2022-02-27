import ExpenseForm, { Expense } from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props: {
    onAddExpense: (expense: Expense) => void
}): JSX.Element => {
    const handleSaveExpenseData = (enteredExpenseData: Expense) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
        </div>
    );
};

export default NewExpense;