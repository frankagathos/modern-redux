import axios from 'axios'

const endpoint = "http://localhost:8000/"
const usersApi = axios.create({ baseURL: endpoint })

export const fetchUsers = async () => {
  try {
    const resp = await usersApi.get("users")
    return resp.data
  }
  catch (err) {
    throw err //display cached error - or could throw new error('Cannot fetch users')
  }
}
export const createUser = async (user) => {
  try {
    const resp = await usersApi.post("/users", { "name": user })
    return resp.data
  }
  catch (err) {
    throw new Error('Cannot create player')
  }
}
export const deleteUser = async ({ id }) => {
  try {
    const deleteUser = await usersApi.delete(`/users/${id}`)
    return id
  }
  catch (error) {
    throw error
  }
}