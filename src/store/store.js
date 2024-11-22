import { configureStore } from "@reduxjs/toolkit"
import { allCities, details, itineraries } from "./reducer/citiesReducer"
import {authReducer, countries, signUpReducer} from "./reducer/authReducer.js"

const store = configureStore({
    reducer: {

        allCities,
        details, 
        itineraries,
        authReducer, 
        countries,
        signUpReducer
    }
})

export default store