import React from 'react'
import InsideOrBetween from '../InsideOrBetweenCity.js'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/context-api'
import CityServiceData from '../services/services'
import { cities } from '../context/api'

// const findByCityName = (cityName) => {
//   const data = cities.find((item) => item.cityName === cityName)
//   console.log('Find data', data)
//   return data;
// }
function Home(props) {
  const [text, setValue] = React.useState('')
  const [city, setCity] = React.useState([])
  const [suggestion, setSuggestion] = React.useState([])
  const { cityData } = React.useContext(DataContext)
  console.log('City Data', cityData)

  var finalArray = cities.map((arr) => arr.cityName)
  const onTextChange = (e) => {
    let suggestion = []

    const value = e.target.value
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i')
      suggestion = finalArray.sort().filter((v) => regex.test(v))
      //console.log(suggestion);
    }
    setValue(value)
    setSuggestion(suggestion)
  }

  //const mycity = CityServiceData.findByCityName(text)
  const findByCityName = (e) => {
    //e.preventDefault();
    const mycity = [...CityServiceData.findByCityName(text)]

    // .then((response) => {
    //   setCity(response.data)
    //   const city = response.data
    //   console.log(city)
    // })
    // .catch((e) => {
    //   console.log(e)
    // })
    setCity(mycity)
    setValue('')
    console.log('My city', city)
  }
  const selectedText = (value) => {
    setValue(value)
    setSuggestion(suggestion)
    findByCityName()
    //setValue('');
  }
  // const handdleShow=()=>{setShow(!show)
  //   setValue("")}
  const renderSuggession = () => {
    if (suggestion.length === 0) {
      return null
    }
    return (
      <>
        <ul>
          {suggestion.map((item, index) => (
            <li className='Home' key={index}>
              {<Link onClick={() => selectedText(item)}>{item}</Link>}
            </li>
          ))}
        </ul>
      </>
    )
  }
  return (
      <header className='header' id='home'>
        <div className='text text-uppercase text-center font-weight-bold'>
          <h1>WELCOME TO CITY ADVISOR</h1>
          <h5>were we help you move around the city</h5>

          <div id='notebooks' className='text-center'>
            <input
              id='query'
              type='text'
              onChange={onTextChange}
              value={text}
              placeholder='search city'
            />
            {renderSuggession()}
            <span>Suggestions: {suggestion.length}</span>
          </div>
          <div>
            {city &&
              city.map((item) => (
                <>
                  <InsideOrBetween id={item.id} title={item.cityName} />
                </>
              ))}
          </div>
        </div>
      </header>
  )
}

export default Home
