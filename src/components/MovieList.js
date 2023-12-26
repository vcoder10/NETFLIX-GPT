import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("from list");
  // if (movies) console.log(movies[0]);
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster_url={movie?.poster_path}
              movieName={
                movie.original_title
                  ? movie.original_title
                  : movie.original_name
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
