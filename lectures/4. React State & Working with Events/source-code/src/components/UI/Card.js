import React from "react";
import './Card.css';

const Card = props => {
  const css = 'card' + props.className;
  return (
    <div className={css}>
      {props.children}
    </div>
  );
}

export default Card;