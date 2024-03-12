import React from "react";
import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";
const layout = ({ children }) => {
  return (
    <div className="text-sm">
      <SearchHeader />
      {children}
    </div>
  );
};

export default layout;
