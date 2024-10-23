function Cities(){
    useEffect(() => {
        const ftch = async ()=>{
          try {
            let citiesFetch = await fetch("https://valorant-api.com/v1/agents");
            let datosCities = await citiesFetch.json(); 
            setCargando(false);
            datosCities = datosCities.data 
    
          } catch (error) {
            console.log(error);
          }
        }
        ftch()
        }
        , []);
    if (cargando) {
          return <div><p className="sm:text-md md:text-md text-xl font-fedra text-white">Cargando...</p></div>; // Muestra mensaje de carga mientras se espera la respuesta
        }
    return(
        <>
            <main className="flex-grow mt-20">
                <p className="flex text-white items-center justify-center">Come back soon...</p>
            </main></>
    )

}

export {Cities}