import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import lab from "../photos/lab.png";

export default function HomeHeader() {
  return (
    <header className=" flex justify-end p-5 text-sm">
      <div className=" flex space-x-4 items-center">
        <Link
          target="_blank"
          className=" hover:underline"
          href={"https://mail.google.com"}
        >
          Gmail
        </Link>
        <Link
          target="_blank"
          className=" hover:underline"
          href={"https://image.google.com"}
        >
          Images
        </Link>

        <Image src={lab} alt="lab logo" className=" w-8 h-8 cursor-pointer " />

        <TbGridDots className=" cursor-pointer bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className=" bg-blue-600 text-white  sm:px-6 px-2 text-xs sm:text-sm py-1 sm:py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
