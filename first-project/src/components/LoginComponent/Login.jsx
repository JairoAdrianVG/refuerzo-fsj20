import { useState } from "react"
import { Greeting }   from '../GreetingComponent/Greeting'

export const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLogged,setLogged] = useState(false)

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        console.log(username);
        console.log(password);
        setLogged(true);
    }

    return(
    <>
        {
            isLogged ? 
            <div>
            <Greeting nombre={username} />
            <button onClick={() => setLogged(false)}>Logout</button>
            </div> : 
            <div>
                <h1>Iniciar Sesion</h1>
                <label>Ingrese su usuario:</label>
                <input type="text" placeholder="Usuario" onChange={(e) => { setUsername(e.target.value)}} />
                <label>Ingrese su contrasenia:</label>
                <input type="password" placeholder="Contraseña" onChange={handlePassword}/>
                <button onClick={handleLogin}>Ingresar</button>
            </div>
            
        }
    </>
)
}
