import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_url, movieName }) => {
  //console.log(poster_url);
  return (
    <div className="w-52 pr-4">
      <img
        alt="movie card"
        className="rounded-lg"
        src={IMG_CDN_URL + poster_url}
      />
      <h2 className="text-white m-4">{movieName}</h2>
    </div>
  );
};

export default MovieCard;
