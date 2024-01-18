import { useEffect, useState } from "react"

const URL = 'https://restcountries.com/v3.1/all';

 export const Greeting = ({nombre}) => {

const [estadito, setEstadito] = useState(null)

// Hook?
// Darle funcionalidad a los elementos sustituyendo la clase
// Componente de una funcion que se ocupa para usar algo
// Funciones que pueden reutilizar codigo
// Pieza de codigo para crear elementos
// 
// Estos te permiten usar el estado y otras características de React sin escribir una clase.

//useEffect ES UN HOOK
    useEffect(() => {
        //fetchs
        //cargar inf de una api
        console.log("Soy el useEffecto");
       

        const fetchData = async (URL) => {
            const resp = await fetch(URL) 
            const result = await resp.json();
            setEstadito(result)
            console.log(result);
        }
        fetchData(URL);

        estadito ?  console.log(estadito) : console.log("aun no hay datos");
    },[])


    return(
        <div>
            <h1>Saludos {nombre}</h1>
        </div>
    )
}
