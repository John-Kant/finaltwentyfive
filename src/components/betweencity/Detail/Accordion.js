import React, { useState } from "react";
import TimeLine1 from "./TimeLine1";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    console.log("destination", item.destination);
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title d-flex justify-content-between text-black ${active} ${
            props.id === "1" ? "you" : props.id === "2" ? "my" : "he"
          }`}
          onClick={() => onTitleClick(index)}
        >
          <div>
            <i className="dropdown icon"></i>
            <button
              className={`ui ${
                props.id === "1"
                  ? "brown"
                  : props.id === "2"
                  ? "purple"
                  : "blue"
              }  button`}
            >
              <i className="bus icon"></i>P{item.number}
            </button>
          </div>
          <div>{item.title}</div>
        </div>
        <div className={`content ${active}`}>
          {item.destination && <TimeLine1 data={item.destination} />}
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
