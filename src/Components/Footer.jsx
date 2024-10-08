import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 


const routes = [
  { to: "/home", text: "Home" },
  { to: "/cities", text: "Cities" },
  { to: "/Login", text:"Login"}
];

function Footer() {
    
  return (
    <>
    <footer className="bg-black bg-opacity-70 text-white p-2">
    <div className="flex justify-between items-center">
        <nav className=" flex flex-row ">
        <ul className="flex flex-col ml-4 mb-2">
            {routes.map((r,index) => (
            <li className="font-SW place-content-center px-3" key={index}>
                <NavLink to={r.to} className={({isActive})=> isActive ? " text-yellow-500 drop-shadow":"text-white drop-shadow"}>{r.text}</NavLink>
            </li>
            ))}
        </ul>
        </nav>
        <div className="text-center font-fedra">
            <p>📍 Galaxy HQ: 123 Spaceway, Sector 7</p>
            <p>📞 Transmission Line: (123) 456-7890</p>
            <p>✉️ Holomail: info@galactictravel.com</p>
            <p>🌌 Join us on epic adventures across the stars!</p>
            <p>🚀 May the Force be with you on your journey!</p>
        </div>
        <div className="flex flex-col space-x-4 md:mr-3">
            <div className="flex flex-col font-fedra mb-2 text-center">
                <h2>Follow our social media</h2>

            </div>
            <div className="flex flex-row gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white hover:text-yellow-500" size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white hover:text-yellow-500" size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white hover:text-yellow-500" size={24} />
                    </a>
            </div>
           
          
        </div>
      </div>
    </footer>
 
    
    </>
     );
}

export {Footer}