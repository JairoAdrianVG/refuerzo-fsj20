import { useEffect, useState } from "react"

interface Country{
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
}

export const useCountryData = () :Country[]  => {

    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchData = async() => { 
            const response = await fetch('https://restcountries.com/v3.1/all');
            const result:Country[] = await response.json();
      
            console.log(result[0].name.common);
            setCountries(result);//guardamos en el estado los resultados
          }
          fetchData();
          console.log(countries);
    }) 

    return countries;
}

