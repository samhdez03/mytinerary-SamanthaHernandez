import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import { CityDetail } from "../Components/CityDetail";

function Details(){
    
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className="flex-grow mt-20 flex justify-center">
                <CityDetail></CityDetail>
            </main>
            <Footer></Footer>

        </div>
        </>
    )

}

export {Details}