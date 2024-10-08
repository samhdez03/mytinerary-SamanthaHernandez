import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import img from '../assets/Death_Star.png';

function NotFound(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <img src={img} className=" h-auto w-32 items-center" alt="Death Star" />
                <h1 className="flex text-white text-4xl items-center justify-center">404 Not Found...</h1>
            </main>
            <Footer></Footer>

        </div>
        </>
    )
}

export { NotFound }