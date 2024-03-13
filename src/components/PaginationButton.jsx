"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export default function PaginationButton() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className=" text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={` ${pathname}?searchTerm=${searchTerm} &start=${
            startIndex - 10
          }`}
        >
          <div className=" flex flex-col items-center hover:underline">
            <FaChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 99 && (
        <Link
          href={` ${pathname}?searchTerm=${searchTerm} &start=${
            startIndex + 10
          }`}
        >
          <div className=" flex flex-col items-center hover:underline">
            <FaAngleRight />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
