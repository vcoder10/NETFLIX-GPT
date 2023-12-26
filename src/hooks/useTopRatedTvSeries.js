import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTvSeries } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedTvSeries = () => {
  const dispatch = useDispatch();
  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedTvSeries(json.results));
  };
  useEffect(() => {
    getPopularTvSeries();
  }, []);
};

export default useTopRatedTvSeries;
