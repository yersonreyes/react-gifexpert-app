import React from "react";
import "./styles/GifCard.css";
const GifCard = ({ gif }) => {
  return (
    <div className="card__container">
      <img src={gif.url} alt="" />
      <a href={gif.url} target="_blank">
        {gif.title}
      </a>
    </div>
  );
};

export default GifCard;
