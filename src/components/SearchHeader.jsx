import React from "react";
import Link from "next/link";
import { GOOGLE_LOGO } from "../../constant";
import SearchBox from "./SearchBox";
import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import lab from "../app/photos/lab.png";
import { Suspense } from "react";

const SearchHeader = () => {
  return (
    <header className=" sticky top-0 bg-white ">
      <div className="  flex flex-row  w-full p-6 items-center justify-between">
        <div className=" sm:flex grid">
          <Link href="/" className=" flex">
            <Image
              src={GOOGLE_LOGO}
              width={120}
              height={40}
              alt="google logo"
            />
          </Link>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchBox />
            </Suspense>
          </div>
        </div>
        <div className=" flex -mt-12">
          <Image
            src={lab}
            alt="lab logo"
            className=" hidden sm:flex w-8 h-8 cursor-pointer "
          />
          <TbGridDots className="hidden sm:flex cursor-pointer bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
          <button className=" bg-blue-600 text-white  sm:px-6 px-3 text-xs sm:text-sm py-2 sm:py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
