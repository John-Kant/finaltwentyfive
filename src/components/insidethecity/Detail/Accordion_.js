import React, { useState } from 'react'
import TimeLine1 from './TimeLine1'

const Accordion_ = (props) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  const renderedItems = props.data.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    console.log('destination', item.stop)
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title d-flex justify-content-between text-black ${active} ${
            props.id === '1' ? 'you' : props.id === '2' ? 'my' : 'he'
          }`}
          onClick={() => onTitleClick(index)}
        >
          <div>
            <i className='dropdown icon'></i>
            <button
              className={`ui teal button ${
                props.id === '1'
                  ? 'ui inverted teal button'
                  : props.id === '2'
                  ? 'purple'
                  : 'blue'
              }  button`}
            >
              <i className='bus icon'></i>P{item.line}
            </button>
          </div>

          <div>{item.title}</div>
        </div>
        <div className={`content ${active}`}>
          {item.stop && <TimeLine1 data={item.stop} />}
        </div>
      </React.Fragment>
    )
  })

  return <div className='ui styled accordion'>{renderedItems}</div>
}

export default Accordion_
