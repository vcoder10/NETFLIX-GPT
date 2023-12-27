import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-40 pl-1 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        {/* <MovieList title={"Trending"} movies={movies?.trendingMovies} /> */}
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MovieList
          title={"Popular Tv Series"}
          movies={movies?.popularTvSeries}
        />
        <MovieList
          title={"Top Rated Tv Series"}
          movies={movies?.topRatedTvSeries}
        />
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
