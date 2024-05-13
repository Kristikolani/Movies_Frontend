import React from "react";
import { Item } from "../entities/Item";
import Items from "./Items";

interface Props {
  items: Item[];
}

const Movies = ({ items }: Props) => {
  const movieItems = items.filter((item) => item.category === "Movie");
  return (
    <div>
      <div className="py-2 px-10 lg:px-32 grid grid-cols-6 relative gap-y-60">
        <Items items={movieItems} />
      </div>
    </div>
  );
};

export default Movies;
