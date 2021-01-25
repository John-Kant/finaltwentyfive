import { Accordion } from '@material-ui/core'
import React from 'react'
import Accordion_ from './Accordion_'
import TimeLine from './TimeLine'
const Line = (props) => {
  console.log('Console me:', props.datas)
  return (
    <>
      <div className='row  cm cbg1 mb-1 ui segment'>
        <div
          className='col-lg-5 col-md-5 col-sm-12'
          style={{ background: 'white' }}
        >
          <div className='mb-5 text-center'>Itineraries</div>
          {props.id ? (
            <>
              <div className='Button yellow mb-4  '>
                Where do you want to go?
              </div>
              {/* { <TimeLine />} */}

              <Accordion_ data={props.datas} />
            </>
          ) : (
            ''
          )}
        </div>
        <div
          className='col-lg-7 col-md-7 col-sm-12'
          style={{ background: 'hsl(205, 63%, 48%)' }}
        >
          <div className='mb-5 text-center'>Bus</div>

          <div>
            {props.datas ? (
              props.datas.map((item, index) => (
                <div
                  className='ui segment d-flex justify-content-between'
                  style={{ background: '#000' }}
                >
                  <button key={index} className='ui inverted teal button'>
                    <i className='bus icon'></i>P{item.line}
                  </button>
                  <button className='ui inverted teal button'>
                    In {item.stop.length - 1}{' '}
                    <span className='px-2'>stops</span>
                  </button>
                  <p className='Button yellow'>
                    Ask the conductor for more info about ticket
                  </p>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Line
