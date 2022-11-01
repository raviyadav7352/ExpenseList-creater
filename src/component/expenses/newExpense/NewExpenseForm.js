import React, { useState } from "react"
import Wrapper from "../../card/Wrapper"
import "./NewExpenseForm.css"

const NewExpenseForm = (props) => {
    const [titleValue, setTitleValue] = useState('')
    const [priceValue, setPriceValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    const titleHandler = (e) => {
        setTitleValue(e.target.value)
    }
    const priceHandler = (e) => {
        setPriceValue(e.target.value)
    }
    const dateHandler = (e) => {
        setDateValue(e.target.value)
    }
    const formSubmitHanndler = (e) => {
        e.preventDefault()
        const newExpenseData = {
            id: Math.random(),
            title: titleValue,
            price: +priceValue,
            date: dateValue
        }
        props.onExpenseData(newExpenseData)
        setDateValue("")
        setPriceValue("")
        setTitleValue("")
    }
    const cancelAddHandler = () => {
        props.onCancel(false)
    }
    return (
        <Wrapper>
            <form onSubmit={formSubmitHanndler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>title</label>
                        <input type="text" value={titleValue} onChange={titleHandler} placeholder="prodect name" />
                    </div>
                    <div className="new-expense__control">
                        <label>price</label>
                        <input type="number" value={priceValue} onChange={priceHandler} min="10" step="1" placeholder="amount enter" />
                    </div>
                    <div className="new-expense__control">
                        <label>date</label>
                        <input type="date" value={dateValue} onChange={dateHandler} min="2019-01-01" max="2023-12-01" />
                    </div>
                </div>
                <div className="new-expense__actions ">
                    <button type="button" className="closebtn" onClick={cancelAddHandler}>Cancel</button>
                    <button type="submit">add expense</button>
                </div>
            </form>
        </Wrapper>

    )
}
export default NewExpenseForm