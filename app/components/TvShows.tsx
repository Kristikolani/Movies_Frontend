import React from "react";
import { catalogItems } from "../items";
import classnames from "classnames";
import Items from "./Items";
import { Item } from "../entities/Item";
interface Props {
  items: Item[];
}
const TvShows = ({ items }: Props) => {
  const TVitems = items.filter((item) => item.category === "TV Show");
  return (
    <div>
      <div className="py-2 px-10 lg:px-32 grid grid-cols-6 relative gap-y-60">
        <Items items={TVitems} />
      </div>
    </div>
  );
};

export default TvShows;
