import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerMovies = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovies = useSelector((store) => store.movies.trailerMovies);
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json?.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerMovies && getMovieVideo();
  }, []);
};

export default useTrailerMovies;
