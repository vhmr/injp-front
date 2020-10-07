import React from "react";
import "../../Card.scss";

const CardHeader = (props) => {
  const { image } = props;
  var style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <div style={style} id={image} className="card-header">
      <h4 className="card-header--title">News</h4>
    </div>
  );
};

export default CardHeader;
