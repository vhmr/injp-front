import React from "react";
import "../../Card.scss";
import { Link } from "react-router-dom"

const Button = () => {
  return (
    <button className="button button-primary">
      <Link to="/ministerio">
        <i className="fa fa-chevron-right"></i> Find out more
      </Link>
    </button>
  );
};

export default Button;
