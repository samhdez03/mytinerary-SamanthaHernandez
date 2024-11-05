import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/R2D2-3CPO.png'
import {useSelector} from "react-redux"

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const data = useSelector(state => state.allCities.datosCities)

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    const imgBySlide = screenSize < 768 ? 1 : 4

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide) => (currentSlide + imgBySlide) % data.length)
        }, 5000)
        return () => clearInterval(interval)
    }, )

    const nextSlide = () => {
        setCurrentSlide((currentSlide) => (currentSlide + imgBySlide) % data.length)
    }

    const prevSlide = () => {
        setCurrentSlide((currentSlide) => (currentSlide - imgBySlide + data.length) % data.length)
    }

    return (
        <div className=" md:pt-4 min-h-full font-fedra text-white ">
            <div className="flex flex-row place-content-center text-center gap-4 mb-4">
                <img src={img} className="flex h-20 w-auto md:mb-10" alt="R2D2y3CPO" />
                <h2 className="text-3xl text-center mt-10">Popular Mytineraries</h2>

            </div>

            <div className="relative overflow-hidden animate-slide-in ">
                <div className="flex flex-wrap place-content-center h-full md:mx-10 md:flex-nowrap transition duration-1000 ease-in-out gap-4" >
                    {data.slice(currentSlide, currentSlide + imgBySlide).map((item) => (
                        <div key={item.name} className={`h-64 md:w-full w-3/4`}>
                            <NavLink to = {`/Details/${item._id}`}>
                                <img src={item.img} alt={item.name} className="w-full h-3/4 object-cover rounded-xl" />
                                <p className="text-center text-xl">{item.name}</p>
                            </NavLink>
                        </div>

                    ))}
                </div>

                <button onClick={prevSlide} className="absolute left-2 hover:text-white hover:bg-yellow-500 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-black p-2 rounded "> &#9664; </button>

                <button onClick={nextSlide} className="absolute right-2 hover:text-white hover:bg-yellow-500 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-black p-2 rounded">
                    &#9654;
                </button>
            </div>
        </div>
    )
}



export { Carousel }
