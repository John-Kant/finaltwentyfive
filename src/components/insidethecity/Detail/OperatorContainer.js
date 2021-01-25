import React from "react";
import bus from "./assets/ddk.png";
import stop_ from "./assets/atfu.png";
import opt_1 from "../../../assets/ope1.jpg";
import opt_2 from "../../../assets/ope2.jpg";
import sl_op from "../../../assets/sl-logo.png";
const Operator = (props) => {
  return (
    <div className="row ui segment cm  ">
      <>
        <div>stop and Bus of city {props.name}</div>
        {props.id === "1" ? (
          <div className="row ui segment cm  mb-1 ">
            <div className="row m-0 w-100 ">
              <img
                className="m-0"
                src={bus}
                alt="bus"
                style={{ height: "130px", width: "100%" }}
              />
            </div>
            <div className="row m-0 w-100">
              <img
                className="m-0"
                src={stop_}
                alt="stop_"
                style={{ height: "150px", width: "100%" }}
              />
            </div>
          </div>
        ) : props.id === "2" ? (
          <div className="row ui segment cm  mb-1 ">
            <div className="row m-0 w-100 ">
              <img
                className="m-0"
                src={opt_1}
                alt="bus"
                style={{ height: "130px", width: "100%" }}
              />
            </div>
            <div className="row m-0 w-100">
              <img
                className="m-0"
                src={opt_2}
                alt="stop_"
                style={{ height: "150px", width: "100%" }}
              />
            </div>
          </div>
        ) : props.id === "3" ? (
          <div className="row ui segment cm  mb-1 ">
            <div className="row m-0 w-100 ">
              <img
                className="m-0"
                src={sl_op}
                alt="bus"
                style={{ height: "130px", width: "100%" }}
              />
            </div>
            <div className="row m-0 w-100">
              <img
                className="m-0"
                src={sl_op}
                alt="stop_"
                style={{ height: "150px", width: "100%" }}
              />
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Operator;
