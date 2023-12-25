import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_url }) => {
  //console.log(poster_url);
  return (
    <div className="w-52 pr-4">
      <img alt="movie card" src={IMG_CDN_URL + poster_url} />
    </div>
  );
};

export default MovieCard;
