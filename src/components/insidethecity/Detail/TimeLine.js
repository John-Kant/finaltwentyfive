import React from 'react'

const TimeLine = (props) => {
  console.log('bakary', props.data)
  return (
    <>
      <div className=''>
        <div className='timelineBox'>
          <div className='timelineBody'>
            <ul className='timeline'>
              {/* {props.data ? (
                props.data.map((item) =>
                  item.stop.map((item, index) => (
                    <li key={index}>
                      <div className={`${item ? 'timelineDot' : ''}`}></div>
                      <div className={`${item ? 'timelineDate' : ''}`}>
                        {item}
                      </div>
                    </li>
                  ))
                )
              ) : (
                <div className='timelineDate'>Nothing</div>
              )} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLine
