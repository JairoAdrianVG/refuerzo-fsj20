import { useState } from "react"
import { Greeting } from "../GreetingComponent/Greeting";

export const Login = () => {
    // una accion 
    // toda la pagina tiene un estado, todos los componentes tienen un estado
    // La interaccion de todos los componentes
    // Punto de partida
    // Es una configuracion o forma de estar de una cosa
    // Acciones 
    const [nombre,setNombre] = useState('Usuario');
    const [email,setEmail] = useState('usuario@gmail.com')

    return(
    <>
        <h1>Soy el Login y tu nombre es {nombre}</h1>
        <label>Ingrese su usuario:</label>
        <input type="text" placeholder="Usuario" onChange={ () => { console.log("cambiaste o escribiste algo en el input usuario") }}/>
        <label>Ingrese su contrasenia:</label>
        <input type="password" placeholder="Contraseña"/>
        <button onClick={() => setNombre('Luis')}>Ingresar</button>
        <br/>
        <Greeting nombre={nombre} mail={email} apellido="Vega"/>
    </>
)
}
