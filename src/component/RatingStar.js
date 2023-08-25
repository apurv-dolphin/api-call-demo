import React from 'react'
import "../App.css";

export default function RatingStar({ filled, onClick }) {
  return (
    <span className={`fa fa-star${filled ? ' checked' : ''}`} onClick={onClick}></span>
  );
}
