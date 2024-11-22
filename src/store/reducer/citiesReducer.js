import { createReducer } from "@reduxjs/toolkit"
import { fetchCities, setSearch, selectedCity, getItineraries } from "../actions/citiesActions"

const initialState = {
    datosCities: [],
    city: {},
    itineraries: [],
    loading: false,
    search:""
}

export const allCities = createReducer (initialState,(builder)=> {
    builder
    .addCase(setSearch, (state, action) => {
        state.search = action.payload
      })
    .addCase(fetchCities.pending, (state)=>{
        state.loading = true
    })
    .addCase(fetchCities.fulfilled, (state, action)=>{
        state.loading = false
        state.datosCities = action.payload
    })
    .addCase(fetchCities.rejected, (state)=>{
        state.loading = false
        state.error = true
    })
})

export const details = createReducer (initialState,(builder)=> {
    builder
    .addCase(selectedCity.pending, (state)=>{
        state.loading = true
    })
    .addCase(selectedCity.fulfilled, (state, action)=>{
        state.loading = false
        state.city = action.payload
    })
    .addCase(fetchCities.rejected, (state)=>{
        state.loading = false
        state.error = true
    })
})
export const itineraries = createReducer (initialState,(builder)=> {
    builder
    .addCase(getItineraries.pending, (state)=>{
        state.loading = true
    })
    .addCase(getItineraries.fulfilled, (state, action)=>{
        state.loading = false
        state.itineraries = action.payload
    })
    .addCase(getItineraries.rejected, (state)=>{
        state.loading = false
        state.error = true
    })
})