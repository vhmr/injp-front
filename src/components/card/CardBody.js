import React from "react";
import "../../Card.scss";

const CardBody = (props) => {
  return (
    <div className="card-body">
      <h2>{props.title}</h2>
      <p className="body-content">{props.text}</p>

    </div>
  );
};

export default CardBody;
