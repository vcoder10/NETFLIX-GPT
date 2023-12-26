import React from "react";
import { useSelector } from "react-redux";
import languages from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languages[langKey].gptSearchPlaceholder}
        />

        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
