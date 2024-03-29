import WebSearchResults from "@/components/WebSearchResults";
import React from "react";

export default async function page({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex} `
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className=" flex flex-col justify-center items-center pt-10">
        <h1 className=" text-lg mb-5">
          Your search -
          <span className="  font-bold"> {searchParams.searchTerm}</span> - did
          not match any documents.
        </h1>
        <h1>Suggestions:</h1>
        <ul style="list-style-type:circle">
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </div>
    );
  }

  return <div> {results && <WebSearchResults results={data} />} </div>;
}
