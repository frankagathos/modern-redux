import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatImgUrl, selectCatImgUrl } from '../../application/catSlice';
import { selectCatImgLoading } from '../../application/catSlice';

function Cat() {
    const dispatch = useDispatch()
    const catImgUrl = useSelector(selectCatImgUrl)
    const loading = useSelector(selectCatImgLoading)
    return (
        <div>
            <h1>Modern Redux - Cat example</h1>
            <p>Fetch cat image</p>
            <button onClick={() => dispatch(getCatImgUrl())}>get cat image</button>
            {loading && <p>...loading</p>}
            {!loading && catImgUrl &&
                <div> <img style={{ maxWidth: 400, margin: 20 }} src={catImgUrl} alt={'kitty'} /></div>}
        </div>
    )
}

export default Cat
