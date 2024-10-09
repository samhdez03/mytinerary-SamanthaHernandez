import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Cities} from "./Pages/Cities";
import {NotFound} from "./Pages/NotFound";
import {Login} from './Pages/Login'; 
import {StandarLayout} from "./Layouts/StandarLayout";
import {Details} from "./Pages/Details";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/mytinerary-SamanthaHernandez", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities> },
      

    ],
  },
    { path: "/", element: <Home></Home> },
    {path: "/Login", element: <Login></Login>},
    {path: "/Details", element: <Details></Details>},
    {path: "/*", element: <NotFound></NotFound>},
  ]);

function App() {
  return (
    <>
    <div className='bg-background bg-contain h-full w-full min-h-full'>
      <RouterProvider router={router}></RouterProvider>
    </div>     
    </>
  )
}

export default App
