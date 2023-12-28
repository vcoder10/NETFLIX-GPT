import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import SimilarVideo from "./SimilarVideo";

const MovieDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState(null);
  const [trailerVideo, setTrailerVideo] = useState(null);

  useEffect(() => {
    getData();
    getMovieVideo();
  }, [id]);

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      API_OPTIONS
    );
    const jsonData = await data.json();

    setDetails(jsonData);
  };
  const getMovieVideo = async () => {
    //if (!movieId) return;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailers = json?.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json?.results[0];
    setTrailerVideo(trailer);
  };
  if (!details) return;
  const { original_title, overview, runtime, genres } = details;
  if (!trailerVideo) return;

  return (
    <div className="pt-[10%]  bg-black md:pt-0 relative">
      <Link to={"/browse"}>
        <button className="text-white absolute top-2 left-2 px-6 py-2 bg-red-500 hover:bg-red-700 rounded z-10">
          👈 back
        </button>
      </Link>

      <div className="absolute w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-24 bg-gradient-to-r from-black text-white">
        <h1 className="text-lg md:text-4xl font-bold md:w-1/2">
          {original_title}
        </h1>
        <p className="ml-2 md:ml-4 font-bold md:mt-3 ">
          {Math.floor(runtime / 60)}h:{runtime % 60}mins
        </p>
        <p className="hidden md:inline-block py-6 text-lg w-2/5">{overview}</p>
        <ul className=" hidden  md:flex">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="font-bold mx-1 text-blue md:text-xl md:px-2 md:mx-2 md:py-1 md:bg-gray-500 md:rounded-lg"
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <SimilarVideo id={id} />
    </div>
  );
};

export default MovieDetails;
