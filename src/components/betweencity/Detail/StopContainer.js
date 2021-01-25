import React from 'react'
//import bus from "./assets/dakar-dem-dik.jpg";
import bus from '../../../assets/outside.jpg'
import stop_ from './assets/arret-bus.jpg'
import bus_ from '../../../assets/thies.jpg'
import stop_1 from '../../../assets/thies-ar.jpg'
import sl_1 from '../../../assets/sl-bus.jpeg'
import sl_2 from '../../../assets/sl-stop.jpg'
const Stop = (props) => {
  return (
    <>
      {props.id === '1' ? (
        <div className='row ui segment cm  mb-1 '>
          <div className='row m-0 w-100 '>
            <img
              className='m-0'
              src={bus}
              alt='bus'
              style={{ height: '130px', width: '100%' }}
            />
          </div>
          <div className='row m-0 w-100'>
            <img
              className='m-0'
              src={stop_}
              alt='stop_'
              style={{ height: '150px', width: '100%' }}
            />
          </div>
        </div>
      ) : props.id === '2' ? (
        <div className='row ui segment cm  mb-1 '>
          <div className='row m-0 w-100 '>
            <img
              className='m-0'
              src={bus_}
              alt='bus'
              style={{ height: '130px', width: '100%' }}
            />
          </div>
          <div className='row m-0 w-100'>
            <img
              className='m-0'
              src={stop_1}
              alt='stop_'
              style={{ height: '150px', width: '100%' }}
            />
          </div>
        </div>
      ) : props.id === '3' ? (
        <div className='row ui segment cm  mb-1 '>
          <div className='row m-0 w-100 '>
            <img
              className='m-0'
              src={sl_1}
              alt='bus'
              style={{ height: '130px', width: '100%' }}
            />
          </div>
          <div className='row m-0 w-100'>
            <img
              className='m-0'
              src={sl_2}
              alt='stop_'
              style={{ height: '150px', width: '100%' }}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Stop
