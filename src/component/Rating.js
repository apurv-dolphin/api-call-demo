import React, { useState } from 'react'
import RatingStar from './RatingStar';

export default function UserRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <RatingStar
        key={index}
        filled={index < rating}
        onClick={() => handleStarClick(index)}
      />
    );
  });

  return <div>{stars}</div>;
}
