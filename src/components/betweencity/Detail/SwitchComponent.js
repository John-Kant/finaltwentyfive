import React from 'react'
import { Link } from 'react-router-dom'
import Line from './LineContainer'
import MapC from './MapContainer'
import Operator from './OperatorContainer'
import Price from './PriceContainer'
import Stop from './StopContainer'
import Ticket from './TicketContainer'

const ToggleSwitch = (props) => {
  return (
    <>
      <section className='h-100 ch container  '>
        <div className=' container'>
          <div className='row mb-5'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <Link to='/'>
                <button className='ui button-title button'> Back home</button>
              </Link>

              <Link to={`/betweencity/${props.id}/${props.title}/itineraries`}>
                <button className='ui button-title button'>Itineraries</button>
              </Link>

              <Link to={`/insidecity/${props.id}/${props.title}`}>
                <button className='ui button-title button'>Inside City</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='row container'>
          <div className='col-lg-7 sp_1 col-md-7 col-sm-12 ch1 ui segment '>
            <Line id={props.id} />
          </div>
          <div className='  text-center sp col-lg-4 col-md-4 col-sm-12  ch2'>
            <Stop id={props.id} />
            <Ticket id={props.id} />
            <Price id={props.id} />
            <Operator id={props.id} />
          </div>

          <div className='px-0 col-lg-12 md-12 sm-12 '>
            <MapC id={props.id} />
          </div>
        </div>
      </section>
    </>
  )
}
export default ToggleSwitch
