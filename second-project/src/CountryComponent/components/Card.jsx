
export const Card = ({country}) => {
  return (
    <div>
         <h1>{country.name.common}</h1>
          <img src={country.flags.svg} />
    </div>
  )
}
