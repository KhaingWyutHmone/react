import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    let expenses = props.expenses;
    return (
        <div>
            {
            expenses.map((item) => {
                return <ExpenseItem name={item.title} price={item.amount} date={item.date} />
              })
            }
        </div>
        
        
    );
}

export default Expenses;