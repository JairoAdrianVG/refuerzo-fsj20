export const Greeting = ({nombre,mail,apellido}) => {

    return(
        <div>
            <h1>Saludos {nombre}</h1>
            <h2>{mail}</h2>
            <h3>{apellido}</h3>
        </div>
    )
}