import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../Components/header";
import {Footer} from "../Components/Footer";


function StandarLayout() {
  return (
    <>
    
    <div className="flex flex-col  min-h-screen ">
      <Header></Header>
        <main className="flex-grow bg-background bg-contain ">
          <Outlet></Outlet>
        </main>
      <Footer></Footer>
    </div>
    </>
  );
}
export {StandarLayout}