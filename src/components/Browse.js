import React from "react";
import Header from "./Header";
import useAddNowPlayingMovies from "../hooks/useAddNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useAddNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
