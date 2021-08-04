import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTheme,update } from '../../application/themeSlice';

function Theme() {
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)


    return (
        <div style={{ background:theme === 'white' ? 'white' : 'gray' }}>
            <h1>Modern Redux - Theme example</h1>
            <p>Toggle background</p>
            <button onClick={() => dispatch(update('white'))}>white theme</button>
            <button onClick={() => dispatch(update('gray'))}>gray theme</button>
        </div>
    )
}

export default Theme
