import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("pop");
  console.log(movies.nowPlayingMovies);
  console.log(movies.popularMovies);
  return (
    <div className="bg-black">
      <div className="-mt-40 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Trending"} movies={movies?.trendingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>

      {/**
       *! MovieList Popular
       *? MovieList Trending
       * MovieList Now Playing
       *# MovieList Horror
       * $ MovieList Drama
       *. MovieList Action
       * MovieList Comedy
       * MovieList Science fi
       * MovieList Romantic
       *
       */}
    </div>
  );
};
export default SecondaryContainer;
