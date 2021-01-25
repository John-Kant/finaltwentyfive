import React from "react";
import ToggleSwitch from "./SwitchComponent";

const Test = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      {<ToggleSwitch /> && open ? (
        <div>Hello bakary</div>
      ) : (
        <div>hello Fatou</div>
      )}
    </div>
  );
};

export default Test;
