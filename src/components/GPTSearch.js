import React from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import BG_IMG_URL from "../images/BG_IMG_URL.jpg";
const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMG_URL} alt="bg-img" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
