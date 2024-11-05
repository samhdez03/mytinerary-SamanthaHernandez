import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const setSearch = createAction("SET_SEARCH")

export const fetchCities = createAsyncThunk(
    'fetchCities',
    async () => {
        const citiesFetch = await fetch(`http://localhost:8080/api/cities/all`)
        const datosCities = await citiesFetch.json()
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return datosCities.response || []
    }
)

export const selectedCity = createAsyncThunk(
    'fetchCity',
    async (ID) => {
        try {
            const citiesFetch = await fetch(`http://localhost:8080/api/cities/ID/${ID}`)
            const city = await citiesFetch.json()
            await new Promise((resolve) => setTimeout(resolve, 2000))
            return city.response || []
        }
        catch (error) {
            console.log(error)
        }
    })

export const getItineraries = createAsyncThunk(
    'getItineraries', async (ID) => {
        try {
            const itinerariesFetch = await fetch(`http://localhost:8080/api/itineraries/cityID/${ID}`)
            const itineraries = await itinerariesFetch.json()
            await new Promise((resolve) => setTimeout(resolve, 2000))
            return itineraries.response || []

        } catch (error) {
            console.log(error)
        }
    }
)