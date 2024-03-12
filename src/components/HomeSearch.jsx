"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import lens from "../app/photos/lens.png";
import Image from "next/image";
import mic from "../app/photos/mic.webp";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomLoading, setRandomLoading] = useState(false);
  const router = useRouter();

  const language = ["हिन्दी", "తెలుగు", "मराठी ", "தமிழ்", "ಕನ್ನಡ", "മലയാളം"];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-2 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl "
      >
        <AiOutlineSearch className=" text-xl mt-1 text-gray-600" />
        <input
          type="text "
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className=" flex-grow focus:outline-none px-2 placeholder-gray-900::placeholder"
          placeholder="Search Google or type URL"
        />

        <Image
          src={mic}
          width={30}
          height={30}
          alt="mic logo"
          className=" cursor-pointer   hover:bg-gray-100 rounded-lg"
        />
        <Image
          src={lens}
          width={30}
          height={30}
          alt="lens logo"
          className=" cursor-pointer   hover:bg-gray-100 rounded-lg"
        />
      </form>
      <div className=" flex gap-2 mt-5 flex-col  space-y-2 sm:space-y-0 justify-center sm:flex-row sm:space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800  hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-sm w-36 h-10"
        >
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800  hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-sm w-36 h-10"
        >
          {randomLoading ? "Loading..." : "I am Feeling Lucky"}
        </button>
      </div>
      <div className=" mt-10">
        <h1 className=" gap-2">
          Google offered in:
          {language.map((lang, i) => (
            <span
              className=" mx-1 cursor-pointer hover:underline text-sm text-blue-900 font-bold"
              key={i}
            >
              {lang}
            </span>
          ))}
        </h1>
      </div>
    </>
  );
};

export default HomeSearch;
