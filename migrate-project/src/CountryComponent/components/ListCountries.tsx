interface ICountryListProps{
    countries: Array<{ 
        name:{common:string};
        flags: { svg:string };
    }>
}

export const ListCountries:React.FC<ICountryListProps>= ({countries}) => {
  return (
    <div>
       <h1>List Countries</h1>
    </div>
  )
}
