import { configureStore } from "@reduxjs/toolkit"
import { allCities, details, itineraries } from "./reducer/citiesReducer"

const store = configureStore({
    reducer: {

        allCities,
        details, 
        itineraries
    }
})

export default store