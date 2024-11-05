import { Footer } from "../Components/Footer"
import { Header } from "../Components/header"

function Login(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className="flex-grow mt-20">
                <p className="flex text-white  items-center justify-center">We're still learning...</p>
                <p className="flex text-white  items-center justify-center">This is in process.</p>
            </main>
            <Footer></Footer>

        </div>
        </>
    )
}

export {Login}