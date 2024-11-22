import { configureStore } from "@reduxjs/toolkit"
import { allCities, details, itineraries } from "./reducer/citiesReducer"
import {authReducer, countries, signUpReducer, updateCountry} from "./reducer/authReducer.js"

const store = configureStore({
    reducer: {

        allCities,
        details, 
        itineraries,
        authReducer, 
        countries,
        signUpReducer,
        updateCountry
    }
})

export default store