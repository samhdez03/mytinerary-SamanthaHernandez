import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { signUp } from "../store/actions/authActions"
import { NavLink } from "react-router-dom"
import schema from "./schemaCreate.js"

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        photo: "",
        country: "",
    })
    const [errors, setErrors] = useState({})
    const countries = useSelector(state => state.countries.datosCountries)
    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.signUpReducer)

    const validateForm = () => {
        const { error } = schema.validate(formData, { abortEarly: false })
        if (error) {
            const errorMessages = {}
            error.details.forEach((err) => {
                errorMessages[err.path[0]] = err.message
            })
            setErrors(errorMessages)
            return false
        }
        setErrors({})
        return true
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
          dispatch(signUp(formData))
        }
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
                            Sign Up
                        </h2>
                        <div>
                            <label className="block text-center text-l font-fedra text-white">
                                Already have an account?  <NavLink to="/Login" className="text-teal-500 ml-2"> Login</NavLink>
                            </label>
                            {["name", "lastName", "email", "password", "photo"].map((field) => (
                                <div key={field}>
                                    <label className="block mb-1 text-l font-fedra text-white">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                                    </label>
                                    <input
                                        type={field === "password" ? "password" : "text"}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                    {errors[field] && (
                                        <p className="text-red-500 text-sm">{errors[field]}</p>
                                    )}
                                </div>
                            ))}
                            <div>
                                <label className="block mb-1 text-l font-fedra text-white">Country:</label>
                                <select
                                    name="country"
                                    value={formData.country}
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
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-gray-800 hover:bg-red-800 font-medium rounded-lg focus:outline-none focus:ring-2 text-white font-SW"
                        >
                            Sign Up
                        </button>
                        <button
                            className="flex items-center justify-center w-full py-2  bg-gray-800 hover:bg-red-800 font-medium rounded-lg focus:outline-none focus:ring-2 text-white font-SW" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" className="mr-2 pr-2">
                                <path fill="#EA4335" d="M24 9.5c3.5 0 6.2 1.4 8.1 3l6-5.8C34.8 3.6 30 2 24 2 14.9 2 7.2 7.8 4.3 16l7.3 5.7C13.2 14 18 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.1 24.6c0-1.5-.1-3-.3-4.4H24v8.3h12.6c-.5 2.7-2 4.9-4.2 6.5l6.7 5.2c3.9-3.6 6-9 6-15.6z" />
                                <path fill="#FBBC05" d="M10.1 27.8c-.6-1.8-1-3.7-1-5.8s.4-4 1-5.8L2.8 10.3C1 14 0 18 0 24s1 10 2.8 13.7l7.3-5.9z" />
                                <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.5c-2 1.4-4.8 2.3-7.5 2.3-5.8 0-10.6-3.8-12.4-9.2l-7.3 5.8C7.3 40.2 14.3 46 24 46z" />
                                <path fill="none" d="M0 0h48v48H0z" />
                            </svg>
                            <NavLink to="http://localhost:8080/api/auth/signIn/google"> Sign Up with Google</NavLink>

                        </button>

                        {loading && <p className="text-center text-teal-400">Loading...</p>}
                        {error && <p className="text-center text-red-500">{error}</p>}
                    </form>
                </div>
            </main>
        </>
    )
}

export { SignUp }