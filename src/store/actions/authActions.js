import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const updateToken = createAction('updateToken');

const setUser = createAction('setUser', (datos) => {
    return {
        payload: datos,
    }
})
const logOut = createAction('logOut')

const login = createAsyncThunk('login', async({email, password}) => {
    const credentials = {
        email: email,
        password: password
    }
    const response = await axios.post("http://localhost:8080/api/auth/signIn", credentials)
    console.log("datos", response.data)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("user", JSON.stringify(response.data.user))
    return response.data
}
)

const fetchCountries = createAsyncThunk(
    'fetchCountries',
    async () => {
        const response = await axios.get(`http://localhost:8080/api/countries/name`)
        const countriesFetch = response.data.response
        console.log( countriesFetch)
        return countriesFetch
    }
)

const signUp = createAsyncThunk('login', async({formData}) => {
    console.log("", formData)
    const response = await axios.post("http://localhost:8080/api/users/signUp", formData)
    const { name, lastName, email, password, photo, country } = response.data.response
    const userData = {
        name,
        lastName,
        email,
        password,
        photo,
        country,
      }
    console.log("datos", response.data)
    console.log("datos stringify", userData)
    console.log(response.data.token)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("user", JSON.stringify(userData))

    return response.data
}
)

export {login, setUser, logOut, updateToken, fetchCountries, signUp}