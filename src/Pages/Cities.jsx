import { useState, useEffect } from 'react'
import { SearchBar } from '../Components/SearchBar'
import { Card } from '../Components/Cards'

function Cities() {
    const [cargando, setCargando] = useState(true);
    const [text, setText] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                let citiesFetch = await fetch(`http://localhost:8080/api/cities/all?name=${text}`)
                let datosCities = await citiesFetch.json()
                setCities(datosCities.response || [])
                setCargando(false)

            } catch (error) {
                console.log(error);
            }
        }
        fetchCities()
    }
        , [text]);
    if (cargando) {
        return <div><p className="flex justify-center mt-20 text-center sm:text-md md:text-md text-xl font-fedra text-white">Cargando...</p></div>
    }

    function handleChangeText(value) {
        setText(value);
    }
    return (
        <>
            <main className="mx-2">
                <div className="ml-6 w-3/5 md:w-full md:ml-0">
                    <SearchBar text={text} handleChangeText={handleChangeText} ></SearchBar>

                </div>
                <div className="flex flex-wrap w-full h-auto gap-2 justify-center p-2 py-5">
                    {cities.length === 0 ? (
                        <p className="text-white font-fedra">No se encontraron ciudades que coincidan con tu búsqueda.</p>
                    ) : (
                        <ul className="flex flex-wrap gap-6 justify-center ">
                            {cities.map(city => (
                                <Card title={city.name} url={city.img} city={city} key={city._id} className="h-2" ></Card>

                            ))}
                        </ul>
                    )}
                </div>

            </main>

        </>
    )

}

export { Cities }