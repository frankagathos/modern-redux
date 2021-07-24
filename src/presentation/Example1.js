import { useSelector, useDispatch } from 'react-redux'
import { updateMsg, selectMsg } from '../application/msg'
import React, { useState } from 'react'

function Example1() {
    const msg = useSelector(selectMsg)
    const dispatch = useDispatch()
    const [inputValue, setinputValue] = useState('')


    const handleChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        dispatch(updateMsg(inputValue))
        e.preventDefault();
    }

    return (
        <div>
            <h1>Example 1</h1>
            <p>No async , simple redux store update</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name &nbsp;
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                our message: {msg.msg}
            </div>
        </div>
    )
}

export default Example1
