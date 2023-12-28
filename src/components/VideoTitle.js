import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] md:pt-[18%] px-6 md:px-24 bg-gradient-to-r from-black text-white">
      <h1 className=" md:text-6xl font-bold w-2/3 md:w-1/2">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <Link to={"/browse/" + id}>
          {" "}
          <button className="bg-white text-black py-1 md:py-4 px-4 md:px-12 md:text-xl  rounded-lg hover:bg-opacity-80">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
