import { NavLink } from 'react-router-dom'
function Card({ title, url, city}) {

    return (
        <>
            <div className="flex flex-col justify-between font-extrabold border-slate-500 border md:w-1/5 relative group rounded overflow-hidden">
                <div className="bg-black relative w-full">
                    <img className="w-full" src={url} alt={title} />
                </div>
                <div className="flex flex-col justify-between p-2  mt-auto">
                    <div className="text-left pt-1 text-clip sm:text-sm">
                        <p className="sm:text-xsm md:text-md text-xl font-fedra text-white">{title}</p>
                    </div>
                    <button
                        className="mt-2 text-white font-fedra bg-gray-800 hover:bg-red-800  font-medium rounded-lg px-4 py-2">
                        <NavLink to = {`/Details/${city._id}`}>View More</NavLink>
                    </button>
                </div>
            </div>


        </>


    )

}

export { Card }