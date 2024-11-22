import { createReducer } from "@reduxjs/toolkit"
import  { login, logOut, setUser, updateToken, signUp, fetchCountries, updateCountry as UC } from "../actions/authActions.js"

const initialState = {
    loading: false,
    error: false,
    user: null,
    token: null

}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state,action) => {
        console.log("se ejecuto correctamente", action.payload)
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
    }).addCase(login.pending, (state, action)=>{
        console.log("cargando")
        state.loading = true
        state.error = false
        state.user = null, 
        state.token = null
    }).addCase(login.rejected, (state, action)=>{
        console.log("error en el signIn")
        state.loading = false,
        state.error = action.error.message,
        state.user = null, 
        state.token = null
    }).addCase(updateToken, (state, action) => {
        state.token = action.payload; // Actualiza el token con el valor recibido
    }).addCase(setUser, (state,action)=>{
        state.loading = false,
        state.error = false,
        state.user = action.payload.user, 
        state.token = action.payload.token
    }).addCase(logOut, (state, action)=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        state.user = null,
        state.token = null
    })
})

const signUpReducer = createReducer(initialState,(builder)=>{
    builder.addCase(signUp.fulfilled, (state,action) => {
        console.log("se ejecuto correctamente", action.payload)
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
    }).addCase(signUp.pending, (state, action)=>{
        console.log("cargando")
        state.loading = true
        state.error = false
        state.user = null, 
        state.token = null
    }).addCase(signUp.rejected, (state, action)=>{
        console.log("error en el signIn")
        state.loading = false,
        state.error = action.error.message,
        state.user = null, 
        state.token = null
    }).addCase(updateToken, (state, action) => {
        state.token = action.payload
    }).addCase(setUser, (state,action)=>{
        state.loading = false,
        state.error = false,
        state.user = action.payload.user, 
        state.token = action.payload.token
    }).addCase(logOut, (state, action)=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        state.user = null,
        state.token = null
    })

})

const countries = createReducer(initialState,(builder)=>{
    builder.addCase(fetchCountries.pending, (state)=>{
        state.loading = true
    })
    .addCase(fetchCountries.fulfilled, (state, action)=>{
        state.loading = false
        state.datosCountries = action.payload
    })
    .addCase(fetchCountries.rejected, (state)=>{
        console.log("murio")
        state.loading = false
        state.error = true
    })
})

const updateCountry = createReducer(initialState,(builder)=>{
    builder.addCase(UC.pending, (state)=>{
        state.loading = true
    })
    .addCase(UC.fulfilled, (state, action)=>{
        state.loading = false, 
        state.error = false,
        console.log("Country updated successfully:", action.payload)
    })
    .addCase(UC.rejected, (state)=>{
        console.log("murio")
        state.loading = false
        state.error = true
    })
})

export {authReducer, signUpReducer, countries, updateCountry}