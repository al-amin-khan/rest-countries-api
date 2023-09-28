import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Country from './components/Country/Country';


function App() {

  const [countries, setCountries] = useState([]);

  useEffect( () => {
    const getCountries = async () => {
      const url = 'https://restcountries.com/v3.1/all';
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }
    getCountries();
  }, [])

  // console.log(countries);

  return (
    <>
      <div className='text-center container mx-auto px-5'>
        <div className="mx-auto w-fit py-5 border-none text-inherit">
          <h1 className="text-3xl font-bold">Hello world</h1>  
        </div>
        
        <p className='p-4'>Total Countries: <strong>{countries.length}</strong> </p>

        {/* <div className="flex flex-row flex-wrap"> */}
        <div className="grid grid-cols-3 gap-10 m-3 ">
        {
          countries.map(country => <Country key={country.cca3} country={country} />)
        }
        </div>
      </div>
    </>
  )
}

export default App
