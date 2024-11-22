import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { signUp, updateCountry } from "../store/actions/authActions.js"
import { Navigate, NavLink } from "react-router-dom"


function UpdateCountry() {
    const countries = JSON.parse(localStorage.getItem("countries"))
    console.log("", countries)
    const user = JSON.parse(localStorage.getItem('user'))
    const userid = user._id
    console.log("", userid)
    const dispatch = useDispatch()
    const [country, setcountry] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleChange = (e) => {
        setcountry(e.target.value) // Actualiza el estado con el valor seleccionado
    }

    useEffect(() => {
        dispatch(updateCountry({ userid, country }))
    }
        , [country])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (country) {
            dispatch(updateCountry({ userid, country }))
            setRedirect(true)
        } else {
            alert("Please select a country.")
        }
    }
    if (redirect) {
        return <Navigate to="/home" ></Navigate>
    }
    return (
        <>
            <main className="mx-2 mt-20">
                <div className="flex place-content-center ">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-sm py-2 px-6 space-y-4 flex flex-col items-center justify-center h-2/4 rounded-lg shadow-md bg-slate-100 bg-opacity-10 border-slate-500 border"
                    >
                        <h2 className="text-2xl font-semibold text-center text-white font-fedra">
                            Select your country, please
                        </h2>
                        <div>
                            <label className="block mb-1 text-l font-fedra text-white">Country:</label>
                            <select
                                name="country"
                                value={country}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <option value="" disabled>
                                    Select your country
                                </option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                        > Update Country

                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export { UpdateCountry }