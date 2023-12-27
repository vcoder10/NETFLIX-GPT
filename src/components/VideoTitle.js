import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[30%] md:pt-[18%] px-6 md:px-24 bg-gradient-to-r from-black text-white">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-4 md:px-12 md:text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
