import { useSelector, useDispatch } from "react-redux"
import { setSearch } from "../store/actions/citiesActions"

function SearchBar() {
    const dispatch = useDispatch()
    const {search} = useSelector((state) => state.allCities)
    return (<>
        <div className="flex flex-col sm:flex-row sm:justify-center mt-20">
            <form className="md:max-w-md md:mx-auto w-full flex flex-col">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex flex-col sm:flex-row">
                    <div className="flex-grow">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search your next destination..." value={search} onChange={(e) => dispatch(setSearch(e.target.value))}
                            />
                        </div>
                    </div>
                    <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 text-white font-SW bg-gray-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search      </button>
                </div>
            </form>
        </div>
    </>)
}

export { SearchBar }