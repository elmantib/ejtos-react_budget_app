import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    // Define a function to handle currency change
    const handleChangeCurrency = (event) => {
        const newCurrency = event.target.value;

        // Dispatch an action to update the currency in the context state
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <div style={{ backgroundColor: '#68da66' }}>
                <label className="input-group-text1" htmlFor="inputGroupSelect03">Currency: </label>
            </div>
            <select className="custom-select" id="Myselect" style={{ backgroundColor: '#68da66' }} onChange={handleChangeCurrency}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value={currency} name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
