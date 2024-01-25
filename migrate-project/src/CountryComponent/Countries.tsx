import { useCountryData } from "../hooks/useCountryData"
import { ListCountries } from "./components/ListCountries";

export const Countries:React.FC = () => {
    const countries  = useCountryData();

  return (
    <div>
        {countries.length > 0 ? <ListCountries countries={countries}/> : <h1>Loading</h1>  }
    </div>
  )
}

//CONDICION ? CASO TRUE : CASO FALSE

//IF(CONDICION){CASO TRUE}ELSE{CASO FALSE}