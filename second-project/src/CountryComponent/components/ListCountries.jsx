import { Card } from "./Card"

export const ListCountries = ({countries}) => {

  return (
    <div>
        {
      countries.map( (country,index) => { 
        return (
        <div key={index}>
            <Card country={country}/>
        </div>
      )  })
       }
    </div>
  )
}
