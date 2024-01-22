import { useCountryData } from '../hooks/useCountryData'
import { ListCountries } from './components/ListCountries'

export const Countries = () => {
  const countries = useCountryData()

  return (
    <div>
    {
      countries ?  <ListCountries countries={countries}/>
      : <h1>Loading</h1> 
    }
        
    </div>
  )
}
