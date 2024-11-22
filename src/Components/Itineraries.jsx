import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getItineraries } from "../store/actions/citiesActions.js"
import { CardItinerary } from './CardItinerary.jsx'
import img from '../assets/R2D2-3CPO.png'

export function Itineraries() {
    const dispatch = useDispatch()
    const { ID } = useParams()
    const { itineraries, loading } = useSelector(state => state.itineraries)

    useEffect(() => {
        dispatch(getItineraries(ID))
    }, [])
    if (loading) {
        return <div><p className="flex justify-center mt-20 text-center sm:text-md md:text-md text-xl font-fedra text-white">Loading...</p></div>
    }

    return (
        <>
            <div className="flex flex-col flex-wrap w-full h-auto gap-2 justify-center p-2 py-5">
                <div className="flex flex-row place-content-center text-center gap-4 mb-4 font-fedra text-white">
                    <img src={img} className="flex h-20 w-auto md:mb-10" alt="R2D2y3CPO" />
                    <h2 className="text-3xl text-center mt-10">Itineraries</h2>
                </div>
                {itineraries.length === 0 ? (
                    <p className="text-white font-fedra">No itineraries yet for this city</p>
                ) : (
                    <ul className="flex flex-wrap gap-6 justify-center ">
                        {itineraries.map(itinerary => (
                            <CardItinerary itinerary={itinerary._id} key={itinerary._id} className="h-2" ></CardItinerary>

                        ))}

                    </ul>
                )}
            </div>
        </>
    )
}


