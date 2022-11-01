import React, {useState} from "react";
import "./Expenses.css"
import RoundBox from "../../card/RoundBox";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteryear, setFilterYear] = useState("2022")
    const filterSelectHandler = (filterexpense) => {
        setFilterYear(filterexpense)
    }
    const filteredExpenses = props.expenseData.filter(expense => {
        return ((new Date(expense.date)).getFullYear().toString() === filteryear)
    })


    return (
        <RoundBox className="expenses">
            <ExpenseFilter selected={filteryear} onFilter={filterSelectHandler} />
            <ExpenseChart expenseData={filteredExpenses} />
            <ExpenseList items={filteredExpenses}></ExpenseList>
            {/* {filteredExpenses == 0 ? <h3> no expense available</h3> : (
        filteredExpenses.map(expense =>(
            <ExpenseItem 
            key={expense.id}
            date ={expense.date}
            title={expense.title}
            price={expense.price}
            />
        )))} */}

            {/* <ExpenseItem 
        date ={item.data[1].date}
        title={item.data[1].title}
        price={item.data[1].price}
        />
        <ExpenseItem 
        date ={item.data[2].date}
        title={item.data[2].title}
        price={item.data[2].price}
        /> */}
        </RoundBox>
    )
}
export default Expenses;