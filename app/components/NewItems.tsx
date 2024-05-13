import React from "react";
import classnames from "classnames";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Item } from "../entities/Item";
import Items from "./Items";
import { getItems } from "../page";

const NewItems = async () => {
  const items = await getItems();
  return (
    <div className="relative">
      <div className="flex justify-between">
        <p className="p-5 pl-36 text-2xl">
          <strong>NEW ITEMS</strong> OF THIS SEASON
        </p>
      </div>
      <div className="absolute bg-[url('../public/images/home__bg.jpg')] top-0 opacity-20 bg-cover bg-center h-96 w-full"></div>
      <div className="py-2 px-10 lg:px-36 grid grid-cols-5 ">
        <Items items={items.result.slice(-5, items.count)} />
      </div>
    </div>
  );
};

export default NewItems;
