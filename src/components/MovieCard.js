import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_url, movieName }) => {
  if (!poster_url) return null;
  return (
    <div className="w-40 md:w-52 pr-4">
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
