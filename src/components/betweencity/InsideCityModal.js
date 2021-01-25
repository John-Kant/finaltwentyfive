// import React from "react";
// import {Button,Modal,Row,Col,Image} from "react-bootstrap";

// import {BsThreeDots,BsArrowLeftRight} from "react-icons/bs"
// import img from "../../assets/ddk.jpg";
// import img1 from "../../assets/money.jpg";
//   function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter" >
//            <div className="text-center"> {props.from} <BsArrowLeftRight/> {props.to} </div>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Row>
//                 <Col xs={6} md={6} ><h4 className="text-center">Departure:</h4>{props.departure}</Col>
//                 <Col xs={6} md={6} c > <h4 className="text-center ml-5"> Price:</h4 > <span className="text-center ml-5"> XOF {props.price}</span></Col>
//             </Row>
//             <Row>
//                 <Col xs={6} md={6} className="text-center"
//                 >
//                 <h4>Operator:</h4>
//                 <Image src={img}  rounded style={{ width: "100px", height: "100px" }} />

//                 </Col>
//                 <Col xs={6} md={6}  className="text-center" >
//                         <h4>method of payment:</h4>
//                     <Image src={img1} rounded style={{ width: "100px", height: "100px" }} />
//                 </Col>

//             </Row>
//     <h4></h4>
//     <p></p>

//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }

//   function InsideCityModal(props) {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//          <BsThreeDots/>
//         </Button>

//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           price={props.price}
//           departure={props.time}
//           from={props.from}
//           to={props.to}

//         />
//       </>
//     );
//   }
//   export default InsideCityModal;
