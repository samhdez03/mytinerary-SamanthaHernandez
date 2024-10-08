import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../Components/header";
import {Footer} from "../Components/Footer";


function StandarLayout() {
  return (
    <>
    
    <div className="flex flex-col bg-background bg-cover min-h-screen ">
      <Header></Header>
        <main className="flex-grow mt-20">
          <Outlet></Outlet>
        </main>
      <Footer></Footer>
    </div>
    </>
  );
}
export {StandarLayout}