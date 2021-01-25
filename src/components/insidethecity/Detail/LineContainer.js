import Accordion from './Accordion'
import React from 'react'
import { items } from './data'

const Line = (props) => {
  return (
    <>
      <div className='row cbg2  mb-1 cm'>
        <div className='col-lg-12 col-md-12 col-sm-12 '>
          <Accordion items={items} id={props.id} />
        </div>
      </div>
    </>
  )
}

export default Line
