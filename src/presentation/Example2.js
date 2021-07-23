import React, { useState } from 'react'

function Example2() {
    const [inputValue, setinputValue] = useState('')

    const handleChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
        </div>
    )
}

export default Example2
