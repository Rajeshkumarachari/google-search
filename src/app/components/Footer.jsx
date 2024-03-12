import React from "react";
import CountryLookup from "./CountryLookup";

const Footer = () => {
  const lists = ["About", "Advertising", "Business", "How Search Works"];
  const rightLists = ["Privacy", "Terms", "Settings"];
  return (
    <footer className=" absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full ">
      <div className=" border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className=" flex flex-col sm:flex-row justify-between items-center px-6 py-3 space-y-0 sm:space-y-0">
        <ul className=" flex  items-center space-x-5">
          {lists.map((list, i) => (
            <li key={i} className=" hover:underline cursor-pointer">
              {list}
            </li>
          ))}
        </ul>
        <ul className=" flex  items-center space-x-5">
          {rightLists.map((lis, i) => (
            <li key={i} className=" hover:underline cursor-pointer">
              {lis}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
