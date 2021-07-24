import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getCountryInfo, selectCountryCapital, selectLoadingCountryCapital } from './../application/country';
function Example2() {
    const [inputValue, setinputValue] = useState('')
    const dispatch = useDispatch()
    const countryCapital = useSelector(selectCountryCapital)
    const loadingCapital = useSelector(selectLoadingCountryCapital)
    const handleChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountryInfo(inputValue));
    }

    return (
        <div>
            <h1>Example 2</h1>
            <p>Async</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Country Name &nbsp;
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {loadingCapital && <p>Loading...</p>}
            {!loadingCapital && <p>{countryCapital}</p>}
        </div>
    )
}

export default Example2
