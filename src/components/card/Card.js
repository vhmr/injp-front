import React from "react";
import "../../Card.scss";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = (props) => {
  return (
    <article className="card">
      <CardHeader image={props.img} />
      <CardBody title={props.title} text={props.text} />
    </article>
  );
};

export default Card;
