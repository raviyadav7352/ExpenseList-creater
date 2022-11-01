import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";


const NewExpense = (props) => {
    const [isAdded, setIsAdded] = useState(false)
    const newExpenseHandler = (newexpense) => {
        props.onNewExpense(newexpense)
    }
    const addedExpenseHAndler = () => {
        setIsAdded(true)
    }
    return (
        <div className="new-expense">
            {!isAdded && <button onClick={addedExpenseHAndler}>add expense</button>}
            {isAdded && <NewExpenseForm onExpenseData={newExpenseHandler} onCancel={setIsAdded}></NewExpenseForm>}
        </div>
    )
}
export default NewExpense;