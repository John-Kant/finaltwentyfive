import React from 'react'
import { useParams } from 'react-router-dom'
import ToggleSwitch from './components/insidethecity/Detail/SwitchComponent'

const InsideOrBetweenCityId = () => {
  const { id } = useParams()
  const { name } = useParams()
  return (
    <section className='insidebetween container'>
      <div
        className='text-center mb-2  '
        style={{ background: 'hsl(205, 63%, 48%)', color: 'white' }}
      >
        <button class='ui inverted teal button '>
          <h3 className='text-uppercase'>Welcome to inside the city {name}</h3>
        </button>
      </div>
      <ToggleSwitch id={id} title={name} />;
    </section>
  )
}

export default InsideOrBetweenCityId
