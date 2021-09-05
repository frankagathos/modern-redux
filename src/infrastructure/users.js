import axios from 'axios'

const endpoint = "http://localhost:8000/"
const usersApi = axios.create({ baseURL: endpoint })

export const fetchUsers = async () => {
  const resp = await usersApi.get("/users")
  return resp.data
}
export const createUser = async (user) => {
  const resp = await usersApi.post("/users", user)
  return resp.data

}
export const deleteUser = async ({ id }) => {
  try {
    const deleteUser = await usersApi.delete(`/users/${id}`)
    return id
  }
  catch (error) {
    return error.response;
  }
}