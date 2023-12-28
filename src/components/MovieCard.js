import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ poster_url, movieName, id }) => {
  if (!poster_url) return null;
  return (
    <div className="w-40 md:w-52 pr-4">
      <Link to={"/browse/" + id}>
        <img
          alt="movie card"
          className="rounded-lg"
          src={IMG_CDN_URL + poster_url}
        />
      </Link>
      <h2 className="text-white m-4">{movieName}</h2>
    </div>
  );
};

export default MovieCard;
