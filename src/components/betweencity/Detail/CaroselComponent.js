import React from "react";
import { Carousel } from "react-bootstrap";
import ticket1 from "./assets/tick1.jpg";
import ticket2 from "./assets/tick2.jpg";
import ticket3 from "./assets/tick3.jpg";
import ticket4 from "../../../assets/thies-ticket.jpg";
import ticket5 from "../../../assets/thies-t.jpg";
import sl_1 from "../../../assets/sl-tik.jpg";
import sl_2 from "../../../assets/sl-tikect.jpg";
const Item = ({ item: { img, alt } }) => (
  <Carousel.Item>
    <a className="thumbnail" href="javascript:void(0)">
      <img className="media-object" src={img} alt={alt} />
    </a>
  </Carousel.Item>
);

const MyCarousel = ({ items }) => (
  <div className="root">
    <Carousel controls={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  </div>
);
const MyCarousel2 = ({ items }) => (
  <div className="root">
    <Carousel controls={false}>
      {items.map((item, i) => (
        <Carousel.Item key={i}>
          <img
            className="media-object"
            src={item.img}
            alt={item.alt}
            style={{ height: "150px", width: "100%" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);
const ITEM = [
  {
    id: 1,
    img: `${sl_1}`,
  },
  {
    id: 2,
    img: `${sl_2}`,
  },
];
const ITEMS = [
  {
    id: 1,
    img: `${ticket1}`,
  },
  {
    id: 2,
    img: `${ticket2}`,
  },
  {
    id: 3,
    img: `${ticket3}`,
  },
];
const ITEMS_ = [
  {
    id: 1,
    img: `${ticket4}`,
  },
  {
    id: 2,
    img: `${ticket5}`,
  },
];
const CaroselComponent = (props) => {
  return (
    <>
      <h4>Type of Tickets:</h4>
      {props.id === "1" ? (
        <MyCarousel2 items={ITEMS} />
      ) : props.id === "2" ? (
        <MyCarousel2 items={ITEMS_} />
      ) : props.id === "3" ? (
        <MyCarousel2 items={ITEM} />
      ) : null}
    </>
  );
};

export default CaroselComponent;
