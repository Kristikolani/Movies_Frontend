import React from "react";
import { catalogItems } from "../items";
import classnames from "classnames";
import { Item } from "../entities/Item";
import Items from "./Items";

interface Props {
  items: Item[];
}

const Cartoons = ({ items }: Props) => {
  const Cartoonitems = items.filter((item) => item.category === "Cartoon");

  return (
    <div>
      <div className="py-2 px-10 lg:px-32 grid grid-cols-6 relative gap-y-60">
        <Items items={Cartoonitems} />
      </div>
    </div>
  );
};

export default Cartoons;
