import React from "react";
import { Item } from "../entities/Item";
import classnames from "classnames";

interface Props {
  items: Item[];
}

const Items = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <div>
          <a href={"/Movies/" + item.id}>
            <img
              key={item.id}
              src={"/images/" + item.cover}
              className="w-fit h-56 absolute rounded"
            />
          </a>
          <div
            key={item.id}
            className={classnames({
              "border-green-700": 10 > item.rating && item.rating > 7,
              "border-yellow-500": 7 > item.rating && item.rating > 5.6,
              "border-red-700": item.rating < 5.7,

              "p-1 m-2 border-2 bg-neutral-600 bg-opacity-50 h-fit w-7 rounded-full flex align-middle justify-center text-xs font-semibold absolute":
                true,
            })}
          >
            {item.rating}
          </div>
          <div className="relative top-56 text-sm">
            <a href={"/Movies/" + item.id}>{item.title}</a>
            <p key={item.id} className="text-yellow-500 text-xs">
              {item.genres.join(" ")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Items;
