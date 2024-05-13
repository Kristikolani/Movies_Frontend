"use client";
import React, { useState } from "react";
import DetailComments from "./DetailComments";
import DetailPhotos from "./DetailPhotos";
import DetailReviews from "./DetailReviews";
import { Item } from "../entities/Item";

interface Props {
  items: Item[];
  params: { id: number };
}

const FilteredDetails = ({ items, params: { id } }: Props) => {
  let [selectedCategory, setSelectedCategory] = useState("Comments");

  return (
    <div>
      <div className="relative text-xl pt-2 pl-20 border-b border-neutral-100 border-opacity-10">
        <p className="pt-8 pb-4 text-3xl font-semibold">Discover</p>
        <div className="flex py-5 ">
          <div
            className={` text-sm mr-5  ${
              selectedCategory === "Comments"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("Comments")}
              className={`pb-2 ${
                selectedCategory === "Comments"
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              COMMENTS
            </button>
          </div>
          <div
            className={` text-sm mx-5  ${
              selectedCategory === "Reviews"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("Reviews")}
              className={` pb-2 ${
                selectedCategory === "Reviews"
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              REVIEWS
            </button>
          </div>
          <div
            className={` text-sm mx-5  ${
              selectedCategory === "Photos"
                ? " border-b-2  border-yellow-500"
                : " border-none"
            }`}
          >
            <button
              onClick={() => setSelectedCategory("Photos")}
              className={`pb-2 ${
                selectedCategory === "Photos"
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              PHOTOS
            </button>
          </div>
        </div>
      </div>

      {selectedCategory === "Comments" && (
        <DetailComments items={items} params={{ id }} />
      )}
      {selectedCategory === "Reviews" && (
        <DetailReviews items={items} params={{ id }} />
      )}
      {selectedCategory === "Photos" && (
        <DetailPhotos items={items} params={{ id }} />
      )}
    </div>
  );
};

export default FilteredDetails;
