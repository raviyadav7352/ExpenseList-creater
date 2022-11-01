import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import RoundBox from "../../card/RoundBox";
const ExpenseItem = (props) => {
    //const day =new Date(props.date).toDateString()
    return (
        <RoundBox className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} ></ExpenseDate>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">₹{props.price}</div>
        </RoundBox>
    )
}
export default ExpenseItem;