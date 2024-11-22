import { SearchBar } from '../Components/SearchBar'
import { Card } from '../Components/Cards'
import { useSelector } from 'react-redux'

function Cities() {
    const {datosCities, loading, search} = useSelector(state => state.allCities)
    const items = datosCities

    if (loading) {
        return <div><p className="flex justify-center mt-20 text-center sm:text-md md:text-md text-xl font-fedra text-white">Loading...</p></div>
    }
    const filteredItems = items.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
        return matchesSearch
    })
    
    return (
        <>
            <main className="mx-2">
                <div className="ml-6 w-3/5 md:w-full md:ml-0">
                    <SearchBar ></SearchBar>

                </div>
                <div className="flex flex-wrap w-full h-auto gap-2 justify-center p-2 py-5">
                    {filteredItems.length === 0 ? (
                        <p className="text-white font-fedra">There are no cities that matches your search.</p>
                    ) : (
                        <ul className="flex flex-wrap gap-6 justify-center ">
                            {filteredItems.map(city => (
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