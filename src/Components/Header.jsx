import { NavLink } from "react-router-dom";
import img from '../assets/pngwing.com (17).png';
import{ NavBar }from "./NavBar";

function Header(){
  
    return (
        <>
         <header className="relative ">
          <div className="flex  bg-black bg-opacity-70 fixed w-full space-x-3">
          <NavLink to="/Home" className="w-full pl-3 "><h1 className="flex items-center font-SW text-3xl md:text-4xl w-full m-3 text-yellow-500 drop-shadow"> My Tinerary  <img src={img} className="h-auto ml-1 w-10 md:w-12" alt="LogoFalcon" /></h1> 
          </NavLink>            
        
              <NavBar ></NavBar>
           
            </div>

        </header>
        </>
    )
}

export { Header }