import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languageConstants";
//import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, clearGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);

  const handleGptSearchClick = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(
      addGptMovieResult({
        movieNames: searchText.current.value,
        movieResults: json.results,
      })
    );
  };
  useEffect(() => {
    return () => {
      // This cleanup function will be called when the component is unmounted
      dispatch(clearGptMovieResult());
    };
  }, []);

  return (
    <div className=" pt-[45%] pb-10 md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12 bg-opacity-50"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8 md:col-span-9"
          placeholder={languages[langKey].gptSearchPlaceholder}
        />

        <button
          className=" col-span-4 md:col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

// call gpt api
// const gptQuery =
//   "Act as a movie Recomendation system and Suggest some movies for the Query :" +
//   searchText.current.value +
//   ". Only give me name of 5 Movies, comma seperated like the example result given ahead. Example Result : KGF, Leo, Nautanki Sala, 3 Idiots, Gaddar 2";

// const gptResults = await openai.chat.completions.create({
//   messages: [{ role: "user", content: gptQuery }],
//   model: "gpt-3.5-turbo",
// });

// search movie call kro
