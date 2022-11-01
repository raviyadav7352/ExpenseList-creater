import "./ExpenseFilter.css";

const ExpenseFilter = (props) =>{
    const filterExpenseHandler = (e) => {
        props.onFilter(e.target.value)
    }
    
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter label">Select expense year</label>
                <select value={props.selected} onChange={filterExpenseHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;