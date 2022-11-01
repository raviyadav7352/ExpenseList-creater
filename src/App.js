import React, {useState} from 'react';
import './App.css';
import Expenses from './component/expenses/ui/Expenses';
import NewExpense from './component/expenses/newExpense/NewExpense';

const demoExpenses =[
  {id:'a1', date:"12-9-2020",title:"smartphone", price:4979},
  {id:'a2', date:"2-6-2021",title:"Motocycle", price:59999},
  {id:'a3', date:"3-2-2022",title:"Laptop", price:5499},
  {id:'a4', date:"11-11-2020",title:"soundsystem", price:8619},
  {id:'a5', date:"12-8-2021",title:"bicycle", price:5589},
  {id:'a6', date:"9-4-2022",title:"tablet", price:7689},
  {id:'a7', date:"9-6-2020",title:"generator", price:41979},
  {id:'a9', date:"12-10-2022",title:"computer", price:9899}
]
function App() {
  const [expenses, setExpenses] = useState(demoExpenses)
  
  const newExpenseHandler = (expense) => {
    setExpenses((oldExpense) =>{
      return[expense, ...oldExpense]
    } )
    }
  return (
        <div className='app'>
          <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
          <Expenses expenseData={expenses}/>
      </div>
  );
}

export default App;
