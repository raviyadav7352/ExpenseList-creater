import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem"
const ExpenseList = (props) => {
    let expenseContent = <h3>no expense available</h3>
    if (props.items.length === 0) {
        return expenseContent
    }
    return (
        <ul className='expenses-list'>
            {props.items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                />
            ))}
        </ul>
    )

}
export default ExpenseList 