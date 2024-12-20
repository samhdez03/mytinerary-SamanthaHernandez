import { React, useState } from "react"
import { NavLink } from "react-router-dom"
import img from '../assets/vader.png'
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../store/actions/authActions.js"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const token = useSelector((state) => state.authReducer.token)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <div className="relative ">
        <button className="md:hidden z-10 p-2 text-white hover:text-yellow-500"
          onClick={() => setIsOpen(!isOpen)} aria-label="menu" >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 16L16 6M6 6l10 10" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        <nav className={`absolute top-9 bg-slate-500 bg-opacity-40 right-2 md:bg-transparent md:w-full sm:w-32 text-white rounded shadow-lg ${isOpen ? "block z-10" : "hidden"} md:flex md:static font-SW  md:top-auto md:shadow-none`} >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
          {token && (
            <li className="flex justify-center items-center md:ml-4">
              <div className="flex flex-col md:flex-row bg-slate-100 bg-opacity-20 md:items-center gap-2 text-center md:text-left rounded text-sm sm:text-base px-4 py-2 md:py-1 w-full md:min-w-max md:flex-grow">
                <img
                  src={user.photo}
                  alt={`${user.name}'s profile`}
                  className="w-12 h-12 md:w-8 md:h-8 rounded-full object-cover"
                />
                <span className="text-sm sm:text-base text-ellipsis text-orange-400 overflow-hidden whitespace-nowrap">
                  {user.name}
                </span>
              </div>
            </li>
          )}


            <li className="font-SW place-content-center px-3" >
              <NavLink to="/home" className={({ isActive }) =>
                isActive ? "text-yellow-500 drop-shadow" : "text-white drop-shadow"}>
                Home
              </NavLink>
            </li>
            <li className="font-SW place-content-center px-3" >
              <NavLink to="/cities" className={({ isActive }) =>
                isActive ? "text-yellow-500 drop-shadow" : "text-white drop-shadow"}>
                Cities
              </NavLink>
            </li>


          </ul>
          {!token ? (
            <div className="flex place-content-center justify-center ml-0 md:ml-4 md:mr-2  mt-0 md:mt-2 mb-2 md:w-32 z-50">
              <button className="flex items-center font-SW px-3 py-1  md:py-2 gap-2 drop-shadow bg-gray-700 text-white hover:bg-red-800 rounded text-sm sm:text-base">
                <img src={img} className="h-auto w-6 sm:w-8" alt="Log in" /><NavLink to="/Login"> Login</NavLink>
              </button>
            </div>
          ) : (
            <div className="flex place-content-center justify-center ml-0 md:ml-4 md:mr-2  mt-0 md:mt-2 mb-2 md:w-32 z-50">
              <button className="flex items-center font-SW px-3 py-1  md:py-2 gap-2 drop-shadow bg-gray-700 text-white hover:bg-red-800 rounded text-sm sm:text-base" onClick={() => dispatch(logOut())}>
                Logout
              </button>
            </div>

          )
          }
        </nav>
      </div>


    </>
  )
}

export { NavBar }