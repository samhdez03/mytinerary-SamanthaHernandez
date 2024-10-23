import { NavLink, useParams  } from 'react-router-dom';
import { useState, useEffect } from 'react'

function CityDetail() {
    const [cargando, setCargando] = useState(true);
    const [cities, setCities] = useState([]);
    const { ID } = useParams();
    console.log(ID);
    useEffect(() => {
        const fetchCities = async () => {
            try {
                let citiesFetch = await fetch(`http://localhost:8080/api/cities/ID/${ID}`)
                let datosCities = await citiesFetch.json()
                setCities(datosCities.response || [])
                setCargando(false)

            } catch (error) {
                console.log(error);
            }
        }
        fetchCities()
    }
        ,[]);
    if (cargando) {
        return <div><p className="flex justify-center mt-20 text-center sm:text-md md:text-md text-xl font-fedra text-white">Cargando...</p></div>
    }


    return (
        <>
            <div className="flex flex-col justify-between font-extrabold border-slate-500 border h-3/4 w-1/2 md:w-1/5 relative group rounded overflow-hidden">
                <div className="bg-black relative w-full">
                    <img className="w-full" src={cities.img} alt={cities.name} />
                </div>
                <div className="flex flex-col justify-between p-2  mt-auto">
                    <div className="text-left pt-1 text-clip sm:text-sm">
                        <p className="sm:text-sm md:text-xl text-xxl font-fedra text-white">{cities.name}</p>
                        <p className="sm:text-xsm md:text-md text-md font-fedra text-white pt-2">Under construction...</p>
                    </div>
                    <button
                        className="mt-2 text-white font-fedra bg-gray-800 hover:bg-red-800  font-medium rounded-lg px-4 py-2">
                        <NavLink to={`/cities`}>Back to Cities</NavLink>
                    </button>
                </div>
            </div>
        </>
    );
}

export { CityDetail };
