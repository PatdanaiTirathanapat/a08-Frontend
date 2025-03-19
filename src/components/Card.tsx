"use client";

import React from "react";
import Rating from "@mui/material/Rating";

interface CardProps {
  place: string;
  imgSrc: string;
  rating?: number; 
  onRatingChange?: (rating: number) => void;
}

const Card: React.FC<CardProps> = ({ place, imgSrc, rating, onRatingChange }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={place} className="card-image" />
      <h2>{place}</h2>
      {rating !== undefined && onRatingChange && (
        <Rating
          id={`${place} Rating`}
          name={`${place} Rating`}
          data-testid={`${place} Rating`}
          value={rating}
          onChange={(_, newValue) => onRatingChange(newValue || 0)}
        />
      )}
    </div>
  );
};

export default Card;
