import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import { GOOGLE_LOGO } from "../../constant";
import HomeSearch from "./components/HomeSearch";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className=" flex flex-col items-center  mt-24">
        <Image src={GOOGLE_LOGO} width={500} height={150} />
        <HomeSearch />
      </div>
    </>
  );
};

export default Home;
