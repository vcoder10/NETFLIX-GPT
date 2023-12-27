import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useRecomendedMovies from "../hooks/useRecomendedMovies";

const GPTMovieSuggestions = () => {
  const { movieResults } = useSelector((store) => store.gpt);

  //const popularMovie = movieResults.filter((movie) => movie.vote_average > 5);

  useRecomendedMovies(27205);

  const movies = useSelector((store) => store.movies);

  if (!movieResults) return null;

  return (
    <div className="bg-black bg-opacity-80">
      <MovieList movies={movieResults} />
      <MovieList title={"Recomended"} movies={movies?.recomendedMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      {/* <MovieList title={"Trending"} movies={movies?.trendingMovies} /> */}
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
    </div>
  );
};

export default GPTMovieSuggestions;
