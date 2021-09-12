import React, { useEffect, useState } from 'react'
import { createUser } from '../../infrastructure/users'
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser, deleteUser, getUsers, selectUsers, selectError } from '../../application/usersSlice';
const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    const error = useSelector(selectError)
    const [inputValue, setInputValue] = useState("")
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewUser(inputValue))
        setInputValue('')
    }

    const handleDelete = id => {
        dispatch(deleteUser({ id }))
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            <h1>Crud users API - (npx json-server --watch data/db.json --port 8000)</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="new-user-input">Insert new user</label>
                <input name="new-user-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"></input>
                <input type="submit" value="Submit" />
            </form>
            {error}
            <ul>
                {users && users.map(user => <li key={user.id}>{user.name}<button onClick={() => handleDelete(user.id)}>Delete</button></li>)}
            </ul>
        </>

    )
}

export default Users
