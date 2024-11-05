import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectedCity } from "../store/actions/citiesActions.js"

function CityDetail() {
    const dispatch = useDispatch()
    const { ID } = useParams()
    const { city, loading } = useSelector(state => state.details)

    useEffect(() => {
        dispatch(selectedCity(ID))
    }, [dispatch, ID])

    if (loading) {
        return <div><p className="flex justify-center mt-20 text-center text-lg sm:text-xl md:text-2xl font-fedra text-white">Loading...</p></div>
    }

    return (
        <>
            <div className="flex place-content-center bg-opacity-70 md:min-h-screen w-full">
                <div 
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${city.img})` }} 
                    className="flex w-full flex-col items-center justify-center h-auto md:min-h-screen bg-center bg-cover text-white p-4 sm:p-6 lg:p-8"
                >
                    <h4 className="text-center pt-8 md:pt-0 text-4xl sm:text-5xl md:text-6xl font-SW">
                        {city.name}
                    </h4>
                    
                    <div className="mt-6 text-base sm:text-lg md:text-xl px-2 sm:px-4 md:px-6 lg:px-8 font-fedra w-full flex flex-col md:flex-row items-start md:space-x-4 lg:space-x-6">
                        <div className="w-full md:w-1/3 md:flex md:items-center mb-4 md:mb-0">
                            <p className="font-bold text-left mx-1">Appearances:</p>
                            <div className="text-left">
                                {(city.appearances || '').split(',').map((appearance, index) => (
                                    <p key={index} className="mt-2">
                                        {appearance.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 md:flex md:items-center mb-4 md:mb-0">
                            <p className="font-bold text-left mx-1">Affiliations:</p>
                            <div className="text-left">
                                {(city.affiliations || 'None').split(',').map((affiliation, index) => (
                                    <p key={index} className="mt-2">
                                        {affiliation.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="flex flex-col space-y-2">
                                <div className="flex">
                                    <p className="font-bold w-1/4 text-left">Climate:</p>
                                    <div className="w-3/4 text-left">
                                        <p>{city.climate}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <p className="font-bold w-1/4 text-left">Terrain:</p>
                                    <div className="w-3/4 text-left">
                                        <p>{city.terrain}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="mt-4 text-white font-fedra bg-gray-700 hover:bg-red-800 font-medium rounded-lg px-6 py-2">
                        <NavLink to={`/cities`}>Back to cities</NavLink>
                    </button>
                </div>
            </div>
        </>
    )
}

export { CityDetail }
