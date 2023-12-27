import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    !trendingMovies && getTopRatedMovies();
  }, []);
};
export default useTrendingMovies;
