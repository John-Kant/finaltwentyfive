import React from 'react'
import inside from './assets/ddk2.jpg'
import bus_ from './assets/thies.jpg'
import outside from './assets/outside.jpg'
import sl_bus from './assets/sl-bus.jpeg'
import { Link } from 'react-router-dom'

function InsideOrBetweenCity(props) {
  return (
    <div className='section_ins_or_bet ui segment container'>
      <section className='bgm1 '>
        <div className=' container pt-5 text-center Link'>
          <div className='text-center'>Welcome to {props.title}</div>
          {props.id === 1 ? (
            <div className='row text-center mb-5'>
              <div className='col-6'>
                <div className='card ' >
                  <div className='card-body'>
                    <img src={inside} className='card-img-top my-0 mb-0' alt='inside' />
                    <a href='#'>
                      <button
                        type='button'
                        className='btn btn_green btn-lg text-uppercase mr-2'
                      >
                        <Link to={`/insidecity/${props.id}/${props.title}`}>
                          Inside City
                        </Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='card' >
                  <div className='card-body'>
                    <h5 className='card-title'></h5>
                    <img src={outside} className='card-img-top my-0 mb-0' alt='outside' />
                    <a href='#'>
                      <button
                        type='button'
                        className='btn btn_green btn-lg text-uppercase mr-2'
                      >
                        <Link to={`/betweencity/${props.id}/${props.title}`}>
                          Between City
                        </Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : props.id === 2 ? (
            <div className='row text-center mb-5'>
              <div className='col-6'>
                <div
                  className='card'
                  style={{ width: '30rem', height: '20rem' }}
                >
                  <div className='card-body'>
                    {/*<h5 className="card-title">dakar</h5>*/}
                    <img
                      src={bus_}
                      className='card-img-top my-0 mb-0 '
                      alt='inside'
                    />

                    <a href='#'>
                      <button
                        type='button'
                        className='btn btn_green btn-lg text-uppercase mr-2'
                      >
                        <Link to={`/insidecity/${props.id}/${props.title}`}>
                          Inside City
                        </Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div
                  className='card'
                  style={{ width: '30rem', height: '20rem' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title'></h5>
                    <img
                      src={bus_}
                      className='card-img-top my-0 mb-0'
                      alt='outside'
                    />

                    <a href='#'>
                      <button
                        type='button'
                        className='btn btn_green btn-lg text-uppercase mr-2'
                      >
                        <Link to={`/betweencity/${props.id}/${props.title}`}>
                          Between City
                        </Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : props.id === 3 ? (
            <div className='row text-center mb-5'>
              <div className='col-6'>
                <div
                  className='card'
                  style={{ width: '30rem', height: '20rem' }}
                >
                  <div className='card-body'>
                    {/*<h5 className="card-title">dakar</h5>*/}
                    <img
                      src={sl_bus}
                      className='card-img-top my-0 mb-0 '
                      alt='inside'
                    />

                    <a href='#'>
                      <button
                        type='button'
                        className='btn btn_green btn-lg text-uppercase mr-2'
                      >
                        <Link to={`/insidecity/${props.id}/${props.title}`}>
                          Inside City
                        </Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div
                  className='card'
                  style={{ width: '30rem', height: '20rem' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title'></h5>
                    <img
                      src={sl_bus}
                      className='card-img-top my-0 mb-0'
                      alt='outside'
                    />

                    <a href='#'>
                      <button
                        type='button'
                        className='btn btn_green btn-lg text-uppercase mr-2'
                      >
                        <Link to={`/betweencity/${props.id}/${props.title}`}>
                          Between City
                        </Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <section className='container'>
              <div className='ui negative message'>
                <div>No avalable information for {props.title}</div>
              </div>
              <div className='ui success message'>
                <div>Current Avalable informations are:</div>
                <div className='row '>
                  <div className='col-lg-12 col-md-12 col-sm-12 text-center'>
                    <Link to='/insidecity/1/DAKAR'>
                      <button className='ui red button'>DAKAR</button>
                    </Link>
                    <Link to='/insidecity/2/THIES'>
                      <button className='ui red button'>THIES</button>
                    </Link>
                    <Link to='/insidecity/3/SAINT-LOUIS'>
                      <button className='ui red button'>SAINT-LOUIS</button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  )
}
export default InsideOrBetweenCity
