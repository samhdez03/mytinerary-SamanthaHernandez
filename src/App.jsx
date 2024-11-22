import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { Cities } from "./Pages/Cities"
import { NotFound } from "./Pages/NotFound"
import { Login } from './Pages/Login'
import { StandarLayout } from "./Layouts/StandarLayout"
import { Details } from "./Pages/Details"
import { useDispatch } from 'react-redux'
import { fetchCities } from './store/actions/citiesActions'
import { useEffect } from 'react'
import axios from 'axios'
import { setUser } from './store/actions/authActions'
import PrivateRoute from './Components/PrivateRoute'
import SignRoute from './Components/SignRoute'
import GoogleRoute from './Components/GoogleRoute'
import { SignUp } from './Pages/SignUp'

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/mytinerary-SamanthaHernandez", element: <Home></Home> },
      { path: "/mytinerary-SamanthaHernandez/Home", element: <Home></Home> },
      { path: "/mytinerary-SamanthaHernandez/home", element: <Home></Home> },
      { path: "/mytinerary-SamanthaHernandez/cities", element: <Cities></Cities> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities> },
      { path: "/mytinerary-SamanthaHernandez/cities", element: <Cities></Cities> },
      { path: `/Details/:ID`, element: <Details></Details> },
      { path: `/mytinerary-SamanthaHernandez/Details/:ID`, element: <Details></Details> },
      { path: "/Details", element: <Details></Details> },
      { path: "/mytinerary-SamanthaHernandez/Login", element: <SignRoute><Login></Login></SignRoute> },
      { path: "/Login", element: <SignRoute><Login></Login></SignRoute> },
      { path: "/google/callback", element:<GoogleRoute></GoogleRoute>  },
      { path: "/signUp", element:<SignRoute><SignUp></SignUp> </SignRoute> },
    ],
  },
  { path: "/*", element: <NotFound></NotFound> },
])

const loginWithToken =  async(token) => {
  try {
    const response = await axios.get('validateToken',
      {
        headers: {
          Authorization: `Bearer{token}`
        }
      }
    )
    return response.data.response
  } catch (error) {
    console.log(error)

  }
}

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCities())
  }
    , [dispatch])

  let token = localStorage.getItem("token")
  if (token) {
    loginWithToken(token).then((user)=> {
      dispatch(setUser({user, token}))
    })
  } 

  return (
    <>
      <div className=' h-full w-full min-h-full bg-background bg-contain'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
