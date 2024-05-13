import React from "react";
import { catalogItems } from "../items";
import classnames from "classnames";
import { Item } from "../entities/Item";
import Items from "./Items";

interface Props {
  items: Item[];
}

const NewReleases = ({ items }: Props) => {
  return (
    <div className="text-neutral-200">
      <div className="py-6 px-10 lg:px-32 grid grid-cols-6 relative gap-y-60">
        <Items items={items} />
      </div>
    </div>
  );
};

export default NewReleases;
