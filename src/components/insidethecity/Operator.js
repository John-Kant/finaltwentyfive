import React from "react";
import CityServiceData from "../../services/services";
function Operator(props) {
    const [opera, setOperator] = React.useState([]);
    const handdleShow = (e) => {
      e.preventDefault();
      CityServiceData.findOperatorByCity(props.id)
        .then((response) => {
          setOperator(response.data);
          const oper = response.data;
          console.log(oper);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    return <div onClick={handdleShow}> </div>
}
export default Operator;