import React from "react";
import "../../Card.scss";
import Button from "./CardButton";

const CardBody = (props) => {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>

      <h2>{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  );
};

export default CardBody;
