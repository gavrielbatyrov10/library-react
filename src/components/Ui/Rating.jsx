import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  if (!Number.isFinite(rating) || rating <= 0) {
    return null;
  }

  const fullStars = Math.floor(rating);
  const hasHalfStar = !Number.isInteger(rating);

  return (
    <div className="book__ratings">
      {Array.from({ length: fullStars }, (_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
    </div>
  );
};

export default Rating;
