import React from 'react'
import CityServiceData from '../../services/services'
function Ticket(props) {
  const [ticket, setTicket] = React.useState([])
  const [show, setShow] = React.useState(true)

  const ticketDetail = (e) => {
    //   CityServiceData.findTicketByCity(props.id)
    //     .then((response) => {
    //       setTicket(response.data);
    //       const ticket = response.data;
    //       console.log(ticket);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
  }
  React.useEffect(() => {
    ticketDetail()
  }, [])
  return (
    <>
      <div className='container'>
        <table className='center table table-striped'>
          <div>{/* <h3>{props.name}</h3> */}</div>
          <thead>
            <tr>
              <th scope='col'>Duration</th>
              <th scope='col'>Price (XOF)</th>
              <th scope='col'>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* {ticket.map((line, index) => (
              <tr key={index}>
                <td>{line.duration}</td>
                <td>{line.price}</td>
                <td>{line.typeofTicket}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Ticket
