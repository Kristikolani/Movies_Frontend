"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineSort } from "react-icons/md";
import { Item } from "../entities/Item";
import Items from "./Items";

interface Props {
  items: Item[];
}

const CatalogFilter = ({ items }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState("any");
  const [selectedQuality, setSelectedQuality] = useState("any");
  const [selectedYear, setSelectedYear] = useState("any");
  const [selectedRating, setSelectedRating] = useState("any");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const filteredResults: any = items.filter(
      (item) =>
        (item.genres.includes(selectedGenre) || selectedGenre == "any") &&
        (item.quality == selectedQuality || selectedQuality == "any") &&
        ((selectedRating == "3.1 - 8.6" &&
          item.rating >= 3.1 &&
          item.rating <= 8.6) ||
          (selectedRating == "8.6 - 10" && item.rating > 8.6) ||
          (selectedRating == "0 - 3.1" && item.rating < 3.1) ||
          selectedRating == "any") &&
        ((selectedYear == "2007 - 2019" &&
          item.releaseYear >= 2007 &&
          item.releaseYear <= 2019) ||
          (selectedYear == "2019 - 2024" && item.releaseYear > 2019) ||
          (selectedYear == "2000 - 2007" && item.releaseYear < 2007) ||
          selectedYear == "any")
    );

    setFilteredItems(filteredResults);

    console.log("Filtered Items:", filteredResults);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between  text-neutral-400 text-sm pt-12 pb-5 px-36 border-b border-b-neutral-100 border-opacity-10">
          <div className="flex gap-x-8">
            <div>
              <p>Genre:</p>
              <div className="flex gap-x-1 text-neutral-200">
                <select
                  style={{ backgroundColor: "rgb(35, 35, 40)" }}
                  className="block w-fit py-1  appearance-none rounded-md text-base text-neutral-200 leading-[1] outline-none transition duration-200 ease-in-out"
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="Action">ACTION</option>
                  <option value="Comedy">COMEDY</option>
                  <option value="Romance">ROMANCE</option>
                  <option value="Triller">TRILLER</option>
                  <option value="Drama">DRAMA</option>
                  <option value="Music">MUSIC</option>
                </select>
                <MdOutlineSort className="h-5" />
              </div>
            </div>
            <div>
              <p>Quality:</p>
              <div className="flex gap-x-1 text-neutral-200">
                <select
                  style={{ backgroundColor: "rgb(35, 35, 40)" }}
                  className="block w-fit py-1  appearance-none rounded-md text-base text-neutral-200 leading-[1] outline-none transition duration-200 ease-in-out"
                  value={selectedQuality}
                  onChange={(e) => setSelectedQuality(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="HD 1080">HD 1080</option>
                  <option value="HD 720">HD 720</option>
                  <option value="Ultra HD">Ultra HD</option>
                </select>
                <MdOutlineSort className="h-5" />
              </div>
            </div>
            <div>
              <p>Rating:</p>
              <div className="flex gap-x-1 text-neutral-200">
                <select
                  style={{ backgroundColor: "rgb(35, 35, 40)" }}
                  className="block w-fit py-1  appearance-none rounded-md text-base text-neutral-200 leading-[1] outline-none transition duration-200 ease-in-out"
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="3.1 - 8.6">3.1 - 8.6</option>
                  <option value="8.6 - 10">8.6 - 10</option>
                  <option value="0 - 3.1">0 - 3.1</option>
                </select>
                <MdOutlineSort className="h-5" />
              </div>
            </div>
            <div>
              <p>Release year:</p>
              <div className="flex gap-x-1 text-neutral-200">
                <select
                  style={{ backgroundColor: "rgb(35, 35, 40)" }}
                  className="block w-fit py-1  appearance-none rounded-md text-base text-neutral-200 leading-[1] outline-none transition duration-200 ease-in-out"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="2007 - 2019">2007 - 2019</option>
                  <option value="2019 - 2024">2019 - 2024</option>
                  <option value="2000 - 2007">2000 - 2007</option>
                </select>
                <MdOutlineSort className="h-5" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-block h-max rounded border-2 border-yellow-500 group-hover:border-green-700 hover:ease-in hover:duration-75 px-4 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </form>
      <div className="py-6 px-10 lg:px-36 grid grid-cols-6 relative gap-y-60 text-neutral-200">
        <Items items={filteredItems} />
      </div>
    </>
  );
};

export default CatalogFilter;
