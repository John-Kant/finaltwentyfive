import React from "react";
import MyMap from "../../../Map/Map1";
const MapC = (props) => {
  return (
    <div className="row cbg2 ui segment mb-1 cm">
      {props.id}

      <MyMap />
    </div>
  );
};

export default MapC;
