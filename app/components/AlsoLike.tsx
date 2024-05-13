import React from "react";
import classnames from "classnames";
import { useParams } from "next/navigation";
import { Item } from "../entities/Item";
import Items from "./Items";

interface Props {
  params: { id: number };
  items: Item[];
}

const AlsoLike = ({ items, params: { id } }: Props) => {
  const alsoLikeItems = items.filter((item) => item.id != id).slice(0, 6);
  return (
    <div className="text-neutral-200 pt-10 pl-20 py-2 relative">
      <p className="text-3xl ">You may also like...</p>
      <div className="pt-5 pb-52 grid grid-cols-2 gap-x-5  gap-y-60">
        <Items items={alsoLikeItems} />
      </div>
    </div>
  );
};

export default AlsoLike;
