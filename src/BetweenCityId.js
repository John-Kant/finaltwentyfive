import React from 'react'
import { useParams } from 'react-router-dom'
import FormInput from './components/betweencity/Detail/FormInput'

const BetweenCityId = () => {
  const { id } = useParams()
  const { name } = useParams()

  return (
    <section className='container insidebetween'>
      <div
        className='text-center mb-2  '
        style={{ background: 'hsl(205, 63%, 48%)' }}
      >
        <button className='ui inverted teal button '>
          <h3 className='text-uppercase'>Welcome to between the city {name}</h3>
        </button>
      </div>
      <FormInput id={id} title={name} />;
    </section>
  )
}

export default BetweenCityId
