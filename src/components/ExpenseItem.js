import React from 'react';

import './ExpenseItem.css';

function ExpenseItem(props){
    let month = props.date.toLocaleString('en-US',{  month: 'short'});
    let year  = props.date.getFullYear();
    let day = props.date.toLocaleString('en-US',{  day: '2-digit'});
    return(
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='.expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>
                    ${props.price}
                </div>
            </div>
            
        </div>
    )
}

export default ExpenseItem;