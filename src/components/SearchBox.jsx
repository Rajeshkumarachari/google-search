"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import mic from "../app/photos/mic.webp";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || " ");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex border border-gray-200  rounded-full mx-10 shadow-md px-6 py-3 ml-10 mr-5 flex-grow max-w-[900px] items-center "
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className=" w-full focus:outline-none"
      />
      <IoIosClose
        onClick={() => {
          setTerm("");
        }}
        className=" text-3xl hover:bg-gray-100 cursor-pointer rounded-full"
      />
      <Image
        src={mic}
        width={30}
        height={30}
        alt="mic logo"
        className=" cursor-pointer border-l-2 border-gray-300   hover:bg-gray-50 "
      />
      <AiOutlineSearch
        onClick={handleSubmit}
        className=" text-2xl cursor-pointer mt-1 hover:bg-gray-100 rounded-full"
      />
    </form>
  );
};

export default SearchBox;
