"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("India");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        // `https://extreme-ip-lookup.com/json/?key= ${process.env.NEXT_PUBLIC_IP_KEY}`
      )
        .then((res) => res.json)
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);
  return <div>{country} </div>;
};

export default CountryLookup;
