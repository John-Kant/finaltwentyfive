import React from 'react'
import { useParams } from 'react-router-dom'
import FormInput from './components/insidethecity/Detail/FormInput'

const InsideCityIdIt = () => {
  const { id } = useParams()
  const { name } = useParams()
  
  return (
    <section className='insidebetween container'>
      <div className='text-center mb-4' style={{ background: 'hsl(205, 63%, 48%)' }} >
        <button className='ui inverted teal button'>
          <h3 className='text-uppercase'>Welcome to inside the city {name}</h3>
        </button>
      </div>
      <FormInput id={id} title={name} />;
    </section>
  )
}

export default InsideCityIdIt
