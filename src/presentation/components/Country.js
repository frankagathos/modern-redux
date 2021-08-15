import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountryInfo, selectCountryCapital, selectLoadingCountryCapital } from '../../application/country';
function Country() {
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
            <h1>Country's capital </h1>
            <p>Async data fetching example.</p>
            <p>Fetch a country's capital name.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Country Name &nbsp;
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>capital:</div>
            {loadingCapital && <p>Loading...</p>}
            {!loadingCapital && <p>{countryCapital}</p>}
        </div>
    )
}

export default Country
