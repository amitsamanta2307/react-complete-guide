import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (): JSX.Element => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;