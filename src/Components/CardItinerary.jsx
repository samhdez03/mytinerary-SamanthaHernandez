import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from "react-redux"

export function CardItinerary({ itinerary }) {
    const itineraries = useSelector(state => state.itineraries.itineraries.find(i => i._id === itinerary))
    const [showDetails, setShowDetails] = useState(false)
    const [currentLikes, setCurrentLikes] = useState(itineraries.likes || 0)
    const hashtagsArray = itineraries.hashtags.split(' ')

    const handleLike = () => {
        setCurrentLikes(currentLikes + 1)
    }

    const handleViewMore = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            <div className="flex flex-col bg-slate-100 bg-opacity-10 border-slate-500 border md:w-1/4 relative group rounded overflow-hidden text-white font-fedra">
                <div className="flex items-center mt-3 mx-6">
                    <img className="w-30 h-40 rounded-full mr-3" src={itineraries.img} alt={itineraries.name} />
                </div>
                <p className="text-md text-white text-center">{itineraries.guide} :</p>
                <div className="flex flex-col mx-1 my-auto">
                    <div className="text-left sm:text-sm">
                        <p className="sm:text-xsm md:text-md text-xl font-SW text-center text-white">{itineraries.name}</p>
                    </div>
                    <p className="mr-2 ml-2">Price:  {itineraries.price} credits 🪙</p>
                    <p className="mr-2 ml-2">Duration:  {itineraries.duration} </p>
                    <div className="flex items-center ml-2.5 mt-2">
                        <button onClick={handleLike} className="text-blue-500 mr-2">👍</button>
                        <p>{currentLikes} Likes</p>
                    </div>
                    <div className="flex justify-center gap-3 mt-2">
                        {hashtagsArray.map((hashtag, index) => (
                            <p key={index} className="text-yellow-400">{hashtag}</p>
                        ))}
                    </div>
                    <button
                        onClick={handleViewMore}
                        className="mt-4 text-white bg-gray-800 hover:bg-red-800 font-medium rounded-lg px-4 py-2 mb-2"
                    >
                        View More
                    </button>

                    {/* Details Section */}
                    {showDetails && (
                        <div className="mt-4 p-4 border-t border-gray-300">
                            <p className="text-gray-500">Activities and Comments: Under construction</p>
                        </div>
                    )}
                </div>
            </div>


        </>


    )

}
