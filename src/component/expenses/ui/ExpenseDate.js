import "./ExpenseDate.css";
import "./ExpenseItem.css"
const ExpenseDate = (props) => {
    const day = new Date(props.date).toLocaleString("en-IN", { weekday: "short" })
    const month = new Date(props.date).toLocaleString("en-IN", { month: "short" })
    const year = new Date(props.date).getFullYear()
    const dayNum = new Date(props.date).getDate()
    // const dateIndia =`${day}, ${month} ${dayNum}, ${year}`

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month},{day}</div>
            <div className="expense-date__day">{dayNum}</div>
            <div className="expense-date__year">{year}</div>
        </div>)

}
export default ExpenseDate;