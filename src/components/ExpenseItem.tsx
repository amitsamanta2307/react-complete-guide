import './ExpenseItem.css';

const ExpenseItem = (): JSX.Element => {
    const expenseDate = new Date(2022, 2, 20);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.97;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">₹{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;