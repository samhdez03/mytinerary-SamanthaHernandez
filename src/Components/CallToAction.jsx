import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/yoda.png'

function CallToAction() {
    return (
        <>
        <div className="flex w-full place-content-center mb-3">
            <div className="flex flex-col justify-center md:flex-row items-center sm:3/4 w-full font-fedra ">
                <div className='md:w-32 md:ml-6 place-content-center'>
                    <img src={img} className="flex h-16 md:h-auto w-auto md:w-32 md:mb-10 md:block" alt="YODA" />

                </div>
                <div className='flex flex-col items-center md:text-2xl'>
                    <p className=" text-center text-yellow-500 mb-4">
                        "Explore the wonders of distant galaxies, you must! Discover cities like never before."
                    </p>
                    <NavLink to="/cities" className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 ">
                        Explore Cities
                    </NavLink>

                </div>
            </div>
        </div>

        </>
    )
}

export { CallToAction }
