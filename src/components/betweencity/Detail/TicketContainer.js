import React from "react";

import tick from "./assets/tick.jpg";
import thies from "../../../assets/thies-re.jpg";
import CaroselComponent from "./CaroselComponent";

const Ticket = (props) => {
  return (
    <div className="row ui segment cm  mb-1 ">
      ticket and where to buy the ticket of city id {props.id}?
      <div className="row m-0 w-100 ">
        <CaroselComponent id={props.id} />
      </div>
      <div className="row m-0 w-100">
        {props.id === "1" ? (
          <img
            className="m-0"
            src={tick}
            alt="stop_"
            style={{ height: "150px", width: "100%" }}
          />
        ) : props.id === "2" ? (
          <img
            className="m-0"
            src={thies}
            alt="stop_"
            style={{ height: "150px", width: "100%" }}
          />
        ) : props.id === "3" ? (
          <img
            className="m-0"
            src={tick}
            alt="stop_"
            style={{ height: "150px", width: "100%" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Ticket;
