import React from 'react';
import img from '../assets/BB8.png';

function Hero() {
    return (
        <div className="flex place-content-center  m-3">  
            <div className="flex w-5/6 flex-col rounded-2xl items-center justify-center h-64 bg-speed bg-center bg-cover text-white">
                <h1 className="flex items-center text-center text-5xl md:text-7xl font-SW drop-shadow-lg">
                    <img src={img} className="h-auto mr-1 w-10 md:w-24 mb-10 hidden md:block" alt="R2D2" />
                    My Tinerary
                </h1>
                <p className="mt-4 text-lg md:text-3xl text-center px-6 font-fedra drop-shadow-2xl">
                    Find your perfect trip, designed by insiders who know and love their cities!
                </p>
            </div>
        </div>
    );
};

export { Hero };
