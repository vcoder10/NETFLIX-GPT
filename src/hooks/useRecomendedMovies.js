import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRecomendedMovies } from "../utils/moviesSlice";

const useRecomendedMovies = (id) => {
  const dispatch = useDispatch();
  const recomendedMovies = useSelector(
    (store) => store.movies.recomendedMovies
  );
  const getRecomendedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addRecomendedMovies(jsonData.results));
  };
  useEffect(() => {
    !recomendedMovies && getRecomendedMovies();
  }, []);
};
export default useRecomendedMovies;
