import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const SimilarVideo = ({ id }) => {
  const movies = useSelector((store) => store.movies);
  const [similarVideo, setSimilarVideo] = useState(null);
  useEffect(() => {
    getSimilarVideo();
  });
  const getSimilarVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    setSimilarVideo(json.results);
  };
  if (!similarVideo) return;
  return (
    <div className="md:-mt-[10%] z-20 relative">
      <MovieList title={"Similar Video"} movies={similarVideo} />
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
    </div>
  );
};

export default SimilarVideo;
