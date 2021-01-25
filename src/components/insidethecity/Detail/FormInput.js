import React from 'react'
import { Link } from 'react-router-dom'
import { data, data1 } from '../../../Cities'
//import data1 from '../../../Cities1'
import Line from './LineComponent1'
import MapC from './MapContainer'
import { BsArrowLeftRight } from 'react-icons/bs'

const reverseData = data1.filter((item) =>
  item.destination === item.destination ? item.destination.reverse() : null
)

const normalData = data.filter((item) => item)
console.log('normal data:', normalData)
console.log('Reverse data:', reverseData)


function FormInput(props) {
  const [text, setValue] = React.useState('')
  const [text1, setValue1] = React.useState('')
  const [suggestion, setSuggestion] = React.useState([])
  const [suggestion1, setSuggestion1] = React.useState([])
  const [filtered, setFilteredData] = React.useState([])
  const [lineNb, setLineNb] = React.useState([])
  const [swap, setSwap] = React.useState(true)
  const [option, setOption] = React.useState(true)

  const line = normalData

  const handlerSwap = () => {
    setSwap(!swap)
    setOption(!option)
  }

  var myarray = line.map((arr) => arr.destination)
  function getUnique(array) {
    var uniqueArray = []

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value)
      }
    }
    return uniqueArray
  }

  const fiArray1 = myarray.flat(1)
  var finalArray1 = getUnique(fiArray1)
  const onTextChange = (e) => {
    let suggestion = []

    const value = e.target.value
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i')
      suggestion = finalArray1.sort().filter((v) => regex.test(v))
    }
    setSuggestion(suggestion)
    setValue(value)
  }

  const onTextChange1 = (e) => {
    let suggestion1 = []

    const value = e.target.value
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i')
      suggestion1 = finalArray1.sort().filter((v) => regex.test(v))
    }
    setSuggestion1(suggestion1)
    setValue1(value)
  }

  const selectedText = (value) => {
    setValue(value)
    //setSuggestion(suggestion);
    setSuggestion([])
  }
  const selectedText1 = (value) => {
    setValue1(value)
    //setSuggestion(suggestion);
    setSuggestion1([])
  }
  const renderSuggession = () => {
    if (suggestion.length === 0 && suggestion1.length === 0) {
      return null
    }
    return (
      <>
        <ul className='ul-cust'>
          {suggestion.map((item, index) => (
            <li className='Home' key={index} onClick={() => selectedText(item)}>
              <span className='home_1'> {item} </span>
            </li>
          ))}
        </ul>
        <ul className='ul-cust'>
          {suggestion1.map((item1, index) => (
            <li
              className='Home'
              key={index}
              onClick={() => selectedText1(item1)}
            >
              <span className='home_1'> {item1}</span>
            </li>
          ))}
        </ul>
      </>
    )
  }
  const ClickMe = (e) => {
    if (swap) {
      if (text !== '' && text1 !== '' && swap) {
        const newArray = normalData.map((item) => {
          console.log(normalData)
          const trdata = {}
          let v = 'stop'

          if (
            item.destination.find((item) => item.includes(`${text}`)) &&
            item.destination.includes(`${text1}`)
          ) {
            trdata.line = item.number
            trdata[v] = item.destination
            const newarr = trdata.stop.filter((item) => {
              if (
                trdata.stop.indexOf(item) >= trdata.stop.indexOf(`${text}`) &&
                trdata.stop.indexOf(item) <= trdata.stop.indexOf(`${text1}`)
              )
                return item
            })

            const newdata = {}
            newdata[v] = newarr
            newdata.line = item.number
            console.log('FilterData:', newdata)
            return newdata
          }
        })

        const value = { ...newArray }

        Object.keys(value).forEach((key) =>
          value[key] === undefined ? delete value[key] : {}
        )
        const propertyNames = Object.values(value)
        setFilteredData(propertyNames)
      }
    } else {
      if (text !== '' && text1 !== '') {
        const newArray = reverseData.map((item) => {
          console.log(reverseData)
          const trdata = {}
          let v = 'stop'

          if (
            item.destination.find((item) => item.includes(`${text}`)) &&
            item.destination.includes(`${text1}`)
          ) {
            trdata.line = item.number
            trdata[v] = item.destination
            const newarr = trdata.stop.filter((item) => {
              if (
                trdata.stop.indexOf(item) >= trdata.stop.indexOf(`${text}`) &&
                trdata.stop.indexOf(item) <= trdata.stop.indexOf(`${text1}`)
              )
                return item
            })

            const newdata = {}
            newdata[v] = newarr
            newdata.line = item.number
            console.log('FilterData:', newdata)
            return newdata
          }
        })

        const value = { ...newArray }

        Object.keys(value).forEach((key) =>
          value[key] === undefined ? delete value[key] : {}
        )
        const propertyNames = Object.values(value)
        setFilteredData(propertyNames)
      }
    }
  }

  const letGo = (e) => {
    e.preventDefault()

    ClickMe()
  }
  return (
    <section className='h-100 ch container'>
      <div className=' container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <Link to='/'>
              <button className='ui button-title button'>Back home</button>
            </Link>

            <Link to={`/insidecity/${props.id}/${props.title}`}>
              <button className='ui button-title button'>Lines</button>
            </Link>
            <Link to={`/betweencity/${props.id}/${props.title}/itineraries`}>
              {' '}
              <button className='ui button-title button'>Between City</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row '>
          <div className='form-2'>
            <div className='row'>
              <div className='col-lg-5 col-md-5 col-sm-12'>
                <p className='float'>
                  <input
                    type='text'
                    name='from'
                    autoComplete='off'
                    placeholder={option ? 'From' : 'Destination'}
                    className='showpassword_1'
                    value={text}
                    onChange={onTextChange}
                  />
                </p>
              </div>
              <div className='col-lg-2 col-md-2 col-sm-12'>
                <p className='float'>
                  <button
                    className={
                      swap
                        ? 'ui inverted teal button  mb-0 pb-0 icon'
                        : 'ui inverted olive  button  mb-0 pb-0 icon'
                    }
                    onClick={handlerSwap}
                  >
                    <BsArrowLeftRight className='arr' />
                  </button>
                </p>
              </div>
              <div className='col-lg-5 col-md-5 col-sm-12'>
                <p className='float'>
                  <input
                    type='to'
                    name='to'
                    autoComplete='off'
                    placeholder={option ? 'Destination' : 'to'}
                    className='showpassword'
                    value={text1}
                    onChange={onTextChange1}
                  />
                </p>
              </div>
              {renderSuggession()}

              <button className='row mybtn btn btn-1 btn-1b' onClick={letGo}>
                <span className=' mybtn--1 '>Go</span>
              </button>
            </div>
          </div>

          <div className='row container'>
            <div className='col-lg-12 sp_1 col-md-12 col-sm-12 '>
              <Line datas={filtered} id={props.id} />
            </div>
            <div className='col-lg-12 md-12 sm-12'>
              <MapC id={props.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormInput
