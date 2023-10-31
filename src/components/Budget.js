import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const remaining = newBudget-totalExpenses;
    
    const newBudget1=remaining<totalExpenses?alert('you cannot reduce the budget value lower than spending'):newBudget;

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
    <div className='alert alert-secondary'>
        <span>Budget:{currency}</span>
        <input type="number" step="10" value={newBudget1} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;
