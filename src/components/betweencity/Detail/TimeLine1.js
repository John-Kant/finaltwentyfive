import React from 'react'

const TimeLine = (props) => {
  return (
    <>
      <div>
        <div
          className='timelineBox ui container segment'
          style={{ background: '#00c2d1' }}
        >
          <div className='timelineBody'>
            <ul className='timeline'>
              {props.data ? (
                props.data.map((item, index) => (
                  <li key={index}>
                    <div className={`${item ? 'timelineDot' : ''}`}></div>
                    <div className={`${item ? 'timelineDate' : ''}`}>
                      {item}
                    </div>
                  </li>
                ))
              ) : (
                <div className='timelineDate'>Please find your destination</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLine
