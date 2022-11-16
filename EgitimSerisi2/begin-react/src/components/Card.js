import React from "react";
import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <div>

        <div class="card w-100">
          <img  src={props.image} class="card-img-top" alt={props.image} />
          <div class="card-body">
            <h5 class="card-title">{props.cardTitle}</h5>
            <p class="card-text">{props.cardText}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{props.updatedTime}</small>
          </div>
        </div>
      </div>
  );
};

Card.defaultProps = {
  cardTitle : "Default Card Title"
}

Card.propTypes = {
  cardText:PropTypes.string.isRequired
}
export default Card;
