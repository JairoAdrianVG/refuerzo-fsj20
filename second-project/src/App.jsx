import { useEffect, useState } from 'react'
import './App.css'


function App() {

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

  return (
    <>
      { countries ? 
      countries.map( (country,index) => { 
        return (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <img src={country.flags.svg} />
        </div>
      )  }) 
      : <h1>Loading</h1>  }
    </>
  )
}

export default App
