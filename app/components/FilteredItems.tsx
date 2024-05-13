"use client";
import React, { useEffect, useState } from "react";
import NewReleases from "./NewReleases";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Cartoons from "./Cartoons";
import { getItems } from "../page";
import { Item } from "../entities/Item";

const FilteredItems = () => {
  let [selectedCategory, setSelectedCategory] = useState("New");
  const [items, setItems] = useState<Item[]>([]); // Change the state type to Item[] directly

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems(); // Assuming getItems is an asynchronous function
        setItems(data.result);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="relative pl-32 pt-64 text-3xl">
        <p className="py-2">New items</p>
        <div className="flex py-5 ">
          <div
            className={` text-sm mr-5  ${
              selectedCategory === "New"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("New")}
              className={`pb-2 ${
                selectedCategory === "New" ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              NEW RELEASES
            </button>
          </div>
          <div
            className={` text-sm mx-5  ${
              selectedCategory === "Movies"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("Movies")}
              className={` pb-2 ${
                selectedCategory === "Movies"
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              MOVIES
            </button>
          </div>
          <div
            className={` text-sm mx-5  ${
              selectedCategory === "TV"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("TV")}
              className={`pb-2 ${
                selectedCategory === "TV" ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              TV SERIES
            </button>
          </div>
          <div
            className={` text-sm mx-5  ${
              selectedCategory === "Cartoons"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("Cartoons")}
              className={` ${
                selectedCategory === "Cartoons"
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              CARTOONS
            </button>
          </div>
        </div>
      </div>

      {selectedCategory === "New" && <NewReleases items={items} />}
      {selectedCategory === "Movies" && <Movies items={items} />}
      {selectedCategory === "TV" && <TvShows items={items} />}
      {selectedCategory === "Cartoons" && <Cartoons items={items} />}
    </div>
  );
};

export default FilteredItems;
