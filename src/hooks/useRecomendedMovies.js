import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRecomendedMovies } from "../utils/moviesSlice";

const useRecomendedMovies = (id) => {
  const dispatch = useDispatch();

  const getRecomendedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addRecomendedMovies(jsonData.results));
  };
  useEffect(() => {
    getRecomendedMovies();
  }, []);
};
export default useRecomendedMovies;
