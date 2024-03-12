import React from "react";
import Image from "next/image";
import { GOOGLE_LOGO } from "../../constant";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import "./globals.css";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className=" flex flex-col items-center  mt-24">
        <Image
          src={GOOGLE_LOGO}
          className="w-[300px] sm:w-[300px] h-[100px] sm:h-[100px] "
          width={500}
          height={150}
          alt="google logo"
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default Home;
