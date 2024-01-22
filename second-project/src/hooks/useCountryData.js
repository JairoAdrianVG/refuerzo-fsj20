import { useEffect, useState } from 'react'

export function useCountryData () {

    const [countries, setCountries] = useState()

    useEffect(() => {
  
      const fetchData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const result = await response.json();
  
        console.log(result[0].name.common);
        setCountries(result);//guardamos en el estado los resultados
      }
      fetchData();
      console.log(countries);
    },[])

    return countries
}