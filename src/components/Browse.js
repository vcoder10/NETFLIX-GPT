import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  //useTrendingMovies();
  useUpcomingMovies();
  //tv
  usePopularTvSeries();
  useTopRatedTvSeries();

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer movies={movies} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
