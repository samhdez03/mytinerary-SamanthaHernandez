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


    ],
  },
  { path: "/", element: <Home></Home> },
  { path: "/Login", element: <Login></Login> },

  { path: "/*", element: <NotFound></NotFound> },
])

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCities())
  }
    , [dispatch])

  return (
    <>
      <div className=' h-full w-full min-h-full bg-background bg-contain'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
